import { Route } from "@tanstack/router";
// import Home from "../pages/Home";

import { rootRoute } from "./RootRoute";
import Home from "../pages/HomePage";
import Filter from "../pages/FilterPage";

export const IndexRoute = new Route({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: "/",
  component: Home,
});
export const FilterRoute = new Route({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: "/filter",
  component: Filter,
});
