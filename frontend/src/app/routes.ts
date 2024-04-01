import { ComponentType } from "react";
import lazy, { PreloadableComponent } from "react-lazy-with-preload";

import { routes } from "./paths";
import { PermissionKey } from "@/lib/permissions";

export type LazyRouteProps = {
  title: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: PreloadableComponent<ComponentType<any>>;
  exact?: boolean;
};

export type Route = LazyRouteProps & { permissions?: Array<PermissionKey> };

export const authRoutesData: Array<Route> = [
  {
    title: "Welcome",
    path: routes.index,
    component: lazy(() => import("@/pages/home")),
  },
  {
    title: "Members",
    path: routes.members,
    component: lazy(() => import("@/pages/members")),
  },
];

export const unAuthRoutesData: Array<Route> = [
  {
    title: "Authorization",
    path: routes.index,
    component: lazy(() => import("@/pages/auth")),
  },
  {
    title: "Recovery-Password",
    path: routes.forgot,
    component: lazy(() => import("@/pages/recovery")),
  },
];
