const User = require("../models/user-models");
const AppError = require("../utils/app-error");
const catchAsync = require("../utils/catch-async");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token && req.cookies.accessToken) {
    token = req.cookies.accessToken;
  }

  if (!token) {
    return next(
      new AppError("User is not authorized", 401, "errors.unauthorized")
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);

  if (!user) {
    return next(
      new AppError("User is not authorized", 401, "errors.unauthorized")
    );
  }

  req.user = user;

  next();
});
