export const authRoutes = {
  signIn: "/",
  forgot: "/recovery-password/:token",
};

export const unAuthRoutes = {
  index: "/",
  members: "/members",
};

export const routes = {
  ...authRoutes,
  ...unAuthRoutes,
};
