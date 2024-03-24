export const authRoutes = {
  signIn: "/",
};

export const unAuthRoutes = {
  index: "/",
  home: "/home",
};

export const routes = {
  ...authRoutes,
  ...unAuthRoutes,
};
