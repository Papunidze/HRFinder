const jwt = require("jsonwebtoken");

exports.signTokens = (user, id) => {
  const refreshToken = jwt.sign({ user, id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  });
  const accessToken = jwt.sign({ user, id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
  });
  return { accessToken, refreshToken };
};
