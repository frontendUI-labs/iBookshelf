import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, Link } from "@tanstack/router";
import type { FunctionComponent } from "./common/types";
// import { TanStackRouterDevelopmentTools } from "./components/utils/development-tools/TanStackRouterDevelopmentTools";
import { router } from "./routes";

const queryClient = new QueryClient();

function Navigation() {
  return (
    // <div>holaaa</div>
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/filter">filterPage</Link>
        </li>
      </ul>
    </nav>
  );
}

const App = (): FunctionComponent => {
  return (
    <>
      {/* <Navigation /> */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <TanStackRouterDevelopmentTools
				router={router}
				initialIsOpen={false}
				position="bottom-right"
			/>
			<ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
};

export default App;
