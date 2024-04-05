import { rest } from "@/lib/request";
import * as t from "io-ts";

export const TUpdateUser = t.type({
  status: t.string,
  user: t.object,
});

export const TUpdatePassword = t.type({
  status: t.string,
  message: t.string,
});

export type SettingsInput = {
  avatar: string;
  name: string;
};

export type PasswordsInput = {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
};

export const updateUser = ({ avatar, name }: SettingsInput) =>
  rest
    .put("/user", {
      avatar,
      name,
    })
    .decode(TUpdateUser);

export const updatePassword = ({
  password,
  newPassword,
  newPasswordConfirm,
}: PasswordsInput) =>
  rest
    .put("/user/update-password", {
      password,
      newPassword,
      newPasswordConfirm,
    })
    .decode(TUpdatePassword);
