import { rest } from "@/lib/request";
import * as t from "io-ts";

export const TAuth = t.type({
  accessToken: t.string,
  refreshToken: t.string,
  status: t.string,
});

export const TRefreshToken = t.type({
  accessToken: t.string,
  refreshToken: t.string,
});

export type SignUpInput = {
  email: string;
  password: string;
  name: string;
  passwordConfirm: string;
};

export const register = ({
  email,
  password,
  name,
  passwordConfirm,
}: SignUpInput) =>
  rest
    .post("/auth/signup", {
      email,
      password,
      name,
      passwordConfirm,
    })
    .decode(TAuth);
