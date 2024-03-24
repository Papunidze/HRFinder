import constate from "constate";
import { useState } from "react";

export enum AuthType {
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated",
  NULL = "null",
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UserState = any;

export type AuthState =
  | { type: AuthType.NULL }
  | { type: AuthType.UNAUTHENTICATED }
  | {
      type: AuthType.AUTHENTICATED;
    };

export type JwtPayload = {
  userId: string;
  user: UserState;
};

export let GlobalAccessToken: string | null;

export const Auth = () => {
  const [auth, setAuth] = useState<AuthState>({ type: AuthType.NULL });

  useState(() => {
    setAuth({ type: AuthType.UNAUTHENTICATED });
  });

  return {
    auth,
  } as const;
};

export const [CheckLoginProvider, useAuthContext] = constate(Auth);
