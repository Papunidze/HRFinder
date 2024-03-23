export const authRoutes = {
  signIn: "/",
};

export const unauthRoutes = {
  index: "/",
  sport: "/sport",
  match: "/sport/:matchId",
  buyTicket: "/event/:eventId",
  confirmation: "/confirmation/:confirmationId",
};

export const routes = {
  ...authRoutes,
  ...unauthRoutes,
};
