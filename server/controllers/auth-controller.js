const { promisify } = require("util");
const catchAsync = require("../utils/catch-async");
const AppError = require("../utils/app-error");
const User = require("../models/user-models");
const bcrypt = require("bcrypt");
const { signTokens } = require("../utils/sign-tokens");
const { setRefreshTokenCookie } = require("../utils/set-cookies");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { EmailForm } = require("../utils/email-form");

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

exports.refresh = catchAsync(async (req, res, next) => {
  const refreshToken = req.cookies.rt || req.body.token;

  if (!refreshToken) {
    return next(
      new AppError("User is not authorized", 401, "errors.unauthorized")
    );
  }

  const decoded = await promisify(jwt.verify)(
    refreshToken,
    process.env.JWT_REFRESH_SECRET
  );

  if (!decoded || !decoded.id) {
    return next(
      new AppError("User is not authorized", 401, "errors.unauthorized")
    );
  }

  const user = await User.findById(decoded.id);

  if (!user) {
    return next(new AppError("User not found", 404, "error.user_not_found"));
  }

  const tokens = signTokens(user, user._id);

  setRefreshTokenCookie(res, tokens.refreshToken);

  res.status(200).json({ status: "success", ...tokens });
});

exports.signOut = (req, res) => {
  res.clearCookie("rt");
  res.clearCookie("auth");
  res.status(200).json({
    status: "success",
    message: "Logged out",
  });
};

exports.googleAuthCallback = catchAsync(async (req, res, next) => {
  const tokens = signTokens(req.user, req.user._id);

  await User.updateOne({ _id: req.user._id });

  setRefreshTokenCookie(res, tokens.refreshToken);

  res.redirect(`${process.env.CLIENT_URL}`);
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(
      new AppError(
        "Email Address Not Found. Please enter a valid email address.",
        401,
        "errors.invalid_email"
      )
    );
  }

  const tokens = signTokens(user, user._id);

  const urlPart = tokens.accessToken;
  const encodedToken = btoa(urlPart);
  const resetLink = `${process.env.CLIENT_URL}/recovery-password/${encodedToken}`;

  const emailContent = EmailForm(user.name, resetLink);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"HrFinder ✨" papunidze07@gmail.com',
    to: email,
    subject: "Password Reset",
    html: emailContent,
  };

  await transporter.sendMail(mailOptions);

  res.status(200).json({
    message: "Password reset instructions sent to your email.",
  });
});

exports.recoveryForgotPassword = catchAsync(async (req, res, next) => {
  const { token, password } = req.body;

  const decodedToken = atob(token);
  const decoded = await promisify(jwt.verify)(
    decodedToken,
    process.env.JWT_SECRET
  );

  const user = await User.findById(decoded.id).select("+password");

  if (!user) {
    return next(new AppError("User not found", 401, "errors.user_not_found"));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await user.updateOne({ password: hashedPassword });

  res.status(200).json({
    status: "success",
    message: "Password updated successfully",
  });
});
