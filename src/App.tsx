import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { FunctionComponent } from "./common/types";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilterPage from "./pages/FilterPage";
import PaymentPage from "./pages/PaymentPage";
import DetailsPage from "./pages/DetailsPage";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/header";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const queryClient = new QueryClient();

export const showToast = () => {
  toast.success("Book Added!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
};
function MainLayout({
  setSearchInput,
}: {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
}
const App = (): FunctionComponent => {
  const [inputValue, setSearchInput] = useState("");
  const persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools />
              <Routes>
                <Route
                  path="/"
                  element={<MainLayout setSearchInput={setSearchInput} />}
                >
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="/filter"
                    element={<FilterPage inputValue={inputValue} />}
                  />
                  <Route
                    path="/filter/:category"
                    element={<FilterPage inputValue={inputValue} />}
                  />
                  <Route path="/details/:bookSlug" element={<DetailsPage />} />
                  <Route path="/checkout" element={<PaymentPage />} />
                </Route>
              </Routes>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
