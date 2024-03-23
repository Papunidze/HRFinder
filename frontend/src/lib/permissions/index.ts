import { useMemo } from "react";
import { AuthType, useAuthContext } from "../../provider/loginProvider";

const permissions = {
  canViewRoles: false,
  canViewPermissions: false,
} as const;

export type PermissionKey = keyof typeof permissions;

export type Permissions = Record<PermissionKey, boolean>;

export const usePermissions = () => {
  const { auth } = useAuthContext();

  const isAuthenticated =
    auth.type === AuthType.NULL || auth.type === AuthType.UNAUTHENTICATED;

  return useMemo(
    () =>
      Object.entries(permissions).reduce(
        (result, [key]) => ({
          ...result,
          [key]: !isAuthenticated ? true : false,
        }),
        {} as Permissions
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth]
  );
};
