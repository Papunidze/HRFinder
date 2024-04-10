export const authRoutes = {
  signIn: "/",
  forgot: "/recovery-password/:token",
};

export const unAuthRoutes = {
  index: "/",
  members: "/members/:id",
  user: "/user/:id",
  create: "/create/:id",
};

export const routes = {
  ...authRoutes,
  ...unAuthRoutes,
};
