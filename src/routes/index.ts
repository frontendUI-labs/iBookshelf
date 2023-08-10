import { Router } from "@tanstack/router";
import { IndexRoute } from "./IndexRoute";
import { rootRoute } from "./RootRoute";
import { FilterRoute } from "./IndexRoute";
// import { HomeRoute } from "./IndexRoute";

const routeTree = rootRoute.addChildren([IndexRoute, FilterRoute]);

const router = new Router({ routeTree, FilterRoute });

declare module "@tanstack/router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}

export { router };
