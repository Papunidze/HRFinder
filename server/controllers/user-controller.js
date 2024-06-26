const User = require("../models/user-models");
const AppError = require("../utils/app-error");
const { default: mongoose } = require("mongoose");
const catchAsync = require("../utils/catch-async");
// const { uploadImage } = require("../config/storage");
const bcrypt = require("bcrypt");
const { uploadImage } = require("../config/storage");

exports.getUser = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  let user = await User.findById(userId);

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(
      new AppError("User is not Found", 401, "errors.user_not_found")
    );
  }

  res.status(200).json({
    status: "success",
    user,
  });
});

exports.searchUser = catchAsync(async (req, res, next) => {
  const { member } = req.query;
  const regex = new RegExp(member, "i");

  try {
    const searchResults = await User.find({
      $or: [{ email: regex }],
    }).select("_id name avatar email");

    res.status(200).json({ result: searchResults });
  } catch (err) {
    return next(new AppError(err.message));
  }
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(
      new AppError("User is not Found", 401, "errors.user_not_found")
    );
  }

  const avatar = (await uploadImage(req.body.avatar)) || req.user.avatar;

  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    { name: req.body.name, avatar },

    { new: true }
  );
  res.status(202).json({
    status: "success",
    user: updatedUser,
  });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { password, newPassword } = req.body;
    const user = await User.findById(userId).select("+password");
    if (!user) {
      return next(
        new AppError("User is not Found", 401, "errors.user_not_found")
      );
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return next(
        new AppError(
          "Invalid password. Please check your credentials.",
          401,
          "errors.invalid_password"
        )
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.updateOne({ password: hashedPassword });

    res.status(202).json({
      status: "success",
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log(`userController::updatePassword ${error.message}`);
    return next(new AppError(error.message, 500));
  }
});
