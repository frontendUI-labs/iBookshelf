import { Link } from "@tanstack/router";
import Header from "../components/layout/header";
import SideBar from "../components/ui/SideBar";
import MainContent from "../components/ui/MainContent";
import OnSaleBook from "../components/ui/on-sale-book";
import useGetBooks from "../data/useGetBooks";

function Filter() {
  const { books, pageRange, setPageRange, isLoading, isError, isSuccess } =
    useGetBooks();
  return (
    <>
      <Link to="/" className="text-red-500 underline">
        home
      </Link>
      {isError && <p>Fallo algo</p>}
      <Header />
      <div className="container m-auto py-24">
        <div className=" grid grid-cols-[400px,1fr] ">
          <SideBar />
          {isLoading && <p>Cargando...</p>}
          {isSuccess && (
            <MainContent
              books={books}
              pageRange={pageRange}
              setPageRange={setPageRange}
            />
          )}
        </div>
        <OnSaleBook />
      </div>
    </>
  );
}

export default Filter;
