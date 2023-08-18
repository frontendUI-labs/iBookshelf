import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { FunctionComponent } from "./common/types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilterPage from "./pages/FilterPage";
import PaymentPage from "./pages/PaymentPage";
import DetailsPage from "./pages/DetailsPage";
const queryClient = new QueryClient();

const App = (): FunctionComponent => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/favorites" element={<DetailsPage />} />
          <Route path="/checkout" element={<PaymentPage />} />
        </Routes>
        {/* <ReactQueryDevtools initialIsOpen={false} />  */}
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
