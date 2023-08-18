import SideBar from "../components/ui/SideBar";
import MainContent from "../components/ui/MainContent";
import OnSaleBook from "../components/ui/on-sale-book";
import useGetBooks from "../data/UseGetBooks";
import { useState } from "react";
import { Link } from "react-router-dom";

type LayoutType = "grid" | "list";

function Filter() {
  const { books, pageRange, setPageRange, isLoading, isError, isSuccess } =
    useGetBooks();
  const [layout, setLayout] = useState<LayoutType>("grid");

  return (
    <>
      <div className="flex gap-2">
        <Link to="/" className="text-red-500 underline">
          Home
        </Link>
        <Link to="/filter" className="text-red-500 underline">
          FilterPage
        </Link>
        <Link to="/details" className="text-red-500 underline">
          DetailsPage
        </Link>
        <Link to="/payment" className="text-red-500 underline">
          PaymentPage
        </Link>
      </div>
      {isError && <p>Fallo algo</p>}
      <div className="container m-auto ">
        <div className=" grid grid-cols-[400px,1fr] py-10 mb-12 ">
          <SideBar />
          {isLoading && <p>Cargando...</p>}
          {isSuccess && (
            <MainContent
              layout={layout}
              setLayout={setLayout}
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
