import { rest } from "@/lib/request";
import * as t from "io-ts";

export const TSignOut = t.type({
  status: t.string,
  message: t.string,
});

export const SignOut = () => rest.delete("/auth/logout").decode(TSignOut);
