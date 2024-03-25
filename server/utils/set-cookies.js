exports.setRefreshTokenCookie = (res, refreshToken) => {
  const msInOneDay = 24 * 60 * 60 * 1000;
  const msInOneHour = 60 * 60 * 1000;
  res.cookie("rt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date(Date.now() + msInOneDay),
  });
  res.cookie("auth", true, {
    httpOnly: false,
    secure: true,
    sameSite: "none",
    expires: new Date(Date.now() + msInOneHour),
  });
};
