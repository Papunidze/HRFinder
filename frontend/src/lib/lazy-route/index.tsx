import React from "react";
import { Route, authRoutesData, unAuthRoutesData } from "@/app/routes";
import { Permissions } from "@/lib/permissions";
import { Helmet } from "react-helmet";
import { Route as BaseRoute } from "react-router-dom";

export const generateLazyRoutes = (permissions: Permissions) => {
  const checkPermission = (page: Route) => {
    return (
      !page.permissions ||
      !page.permissions.some((permission) => permissions[permission] === false)
    );
  };

  const routesData: Array<Route> = permissions.canViewRoles
    ? authRoutesData
    : unAuthRoutesData;

  return routesData.map((page) =>
    checkPermission(page) ? (
      <BaseRoute
        key={page.path}
        path={page.path}
        element={
          <>
            <Helmet title={page.title} />
            <React.Suspense fallback={<div>Loading...</div>}>
              <page.component />
            </React.Suspense>
          </>
        }
      />
    ) : null
  );
};
