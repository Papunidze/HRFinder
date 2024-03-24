export const authRoutes = {
  signIn: "/",
};

export const unAuthRoutes = {
  index: "/",
  sport: "/sport",
  match: "/sport/:matchId",
  buyTicket: "/event/:eventId",
  confirmation: "/confirmation/:confirmationId",
};

export const routes = {
  ...authRoutes,
  ...unAuthRoutes,
};
