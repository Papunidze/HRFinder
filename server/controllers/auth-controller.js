const catchAsync = require("../utils/catch-async");
const AppError = require("../utils/app-error");
const User = require("../models/user-models");
const bcrypt = require("bcrypt");
const { signTokens } = require("../utils/sign-tokens");
const { setRefreshTokenCookie } = require("../utils/set-cookies");

exports.signup = catchAsync(async (req, res, next) => {
  try {
    const existingUser = await User.findOne({
      email: req.body.email.toLowerCase(),
    });

    if (existingUser) {
      return next(
        new AppError(
          "Email already in use. Please use a different email.",
          409,
          "errors.email_in_use"
        )
      );
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const initials = req.body.name
      .split(" ")
      .map((n) => n[0])
      .join("");

    const newUser = new User({
      name: req.body.name,
      email: req.body.email.toLowerCase(),
      avatar: `https://api.dicebear.com/5.x/initials/svg?seed=${initials}`,
      password: hashedPassword,
    });

    await newUser.save();

    const tokens = signTokens(newUser, newUser._id);

    setRefreshTokenCookie(res, tokens.refreshToken);

    res.status(201).json({
      ...tokens,
      status: "success",
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.sign = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email.toLowerCase(),
    }).select("+password");

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return next(
        new AppError(
          "Invalid email or password. Please check your credentials.",
          401,
          "errors.invalid_credentials"
        )
      );
    }
    const tokens = signTokens(user, user._id);

    setRefreshTokenCookie(res, tokens.refreshToken);

    res.status(200).json({
      ...tokens,
      status: "success",
    });
  } catch (err) {
    return next(new AppError(err.message));
  }
};
