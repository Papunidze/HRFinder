import { rest } from "@/lib/request";
import * as t from "io-ts";

export const TAuth = t.type({
  accessToken: t.string,
  refreshToken: t.string,
});

export const TRefreshToken = t.type({
  accessToken: t.string,
  refreshToken: t.string,
});

export type AuthInput = {
  email: string;
  password: string;
};

export const auth = ({ email, password }: AuthInput) =>
  rest
    .post("/auth/sign", {
      email,
      password,
    })
    .decode(TAuth);

export const refresh = () => rest.post("/auth/refresh").decode(TRefreshToken);
