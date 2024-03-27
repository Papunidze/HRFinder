import { rest } from "@/lib/request";
import * as t from "io-ts";

export type resetPasswordInputs = {
  email: string;
};

export const TResetPassword = t.type({
  message: t.string,
});

export const passwordReset = ({ email }: resetPasswordInputs) =>
  rest
    .post("/auth/forgot-password", {
      email,
    })
    .decode(TResetPassword);
