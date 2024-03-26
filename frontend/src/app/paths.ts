export const authRoutes = {
  signIn: "/",
  forgot: "/recovery-password/:token",
};

export const unAuthRoutes = {
  index: "/",
};

export const routes = {
  ...authRoutes,
  ...unAuthRoutes,
};
