import constate from "constate";
import { jwtDecode } from "jwt-decode";
import { useCallback, useEffect, useState } from "react";

import { refresh } from "@/modules/auth/sign-in/sign-in-api";
import { deleteAllCookies, getUserAuth } from "@/app/cookies";

// eslint-disable-next-line react-refresh/only-export-components
export enum AuthType {
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated",
  NULL = "null",
}
export type UserState = {
  _id: string;
  name: string;
  avatar: string;
  email: string;
  password: string;
  createdAt: string;
};

export type AuthState =
  | { type: AuthType.NULL; user: null; id: null }
  | { type: AuthType.UNAUTHENTICATED; user: null; id: null }
  | {
      type: AuthType.AUTHENTICATED;
      id: string;
      user: UserState;
    };

export let GlobalAccessToken: string | null;

export type JwtPayload = {
  id: string;
  user: UserState;
};

export const decodeJwt = (accessToken: string) =>
  jwtDecode<JwtPayload>(accessToken);

export const Auth = () => {
  const [auth, setAuth] = useState<AuthState>({
    type: AuthType.NULL,
    user: null,
    id: null,
  });

  const setAuthData = useCallback(({ ...args }) => {
    GlobalAccessToken = args.accessToken;

    const { id, user } = decodeJwt(args.accessToken);

    setAuth(() => ({
      type: AuthType.AUTHENTICATED,
      user,
      id: id,
    }));
  }, []);

  const removeToken = useCallback(() => {
    setAuth({ type: AuthType.UNAUTHENTICATED, user: null, id: null });
    deleteAllCookies();
  }, []);

  const refreshToken = useCallback(async () => {
    try {
      const { ...args } = await refresh();
      setAuthData({ ...args });
    } catch (err) {
      removeToken();
    }
  }, [removeToken, setAuthData]);

  useEffect(() => {
    if (getUserAuth() !== "null" && getUserAuth() === "true") {
      refreshToken();
    } else {
      setAuth({ type: AuthType.UNAUTHENTICATED, user: null, id: null });
    }
  }, [refreshToken]);

  const watchToken = (event: StorageEvent) => {
    if (event.key === "rt") {
      removeToken();
      setAuth({ type: AuthType.UNAUTHENTICATED, user: null, id: null });
    }
  };
  useEffect(() => {
    window.addEventListener("storage", watchToken);

    return () => {
      window.removeEventListener("storage", watchToken);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    auth,
    removeToken,
    setAuthData,
  } as const;
};

// eslint-disable-next-line react-refresh/only-export-components
export const [CheckLoginProvider, useAuthContext] = constate(Auth);
