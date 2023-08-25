import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { FunctionComponent } from "./common/types";
import {
  BrowserRouter,
  Routes,
  Route,
  // Router,
  Outlet,
  // RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilterPage from "./pages/FilterPage";
import PaymentPage from "./pages/PaymentPage";
import DetailsPage from "./pages/DetailsPage";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/header";

const queryClient = new QueryClient();

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const App = (): FunctionComponent => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />

        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/filter" element={<FilterPage />} />
            <Route path="/filter/:category" element={<FilterPage />} />
            <Route path="/details/:bookSlug" element={<DetailsPage />} />
            <Route path="/checkout" element={<PaymentPage />} />
          </Route>
        </Routes>
        {/* <ReactQueryDevtools initialIsOpen={false} />  */}
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
