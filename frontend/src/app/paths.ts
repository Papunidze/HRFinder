export const authRoutes = {
  signIn: "/",
  forgot: "/recovery-password/:token",
};

export const unAuthRoutes = {
  index: "/",
  members: "/members",
  user: "/user",
  create: "/create",
};

export const routes = {
  ...authRoutes,
  ...unAuthRoutes,
};
