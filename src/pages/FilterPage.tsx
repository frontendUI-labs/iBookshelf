import { Link } from "@tanstack/router";
import Header from "../components/layout/header";
import SideBar from "../components/ui/SideBar";
import MainContent from "../components/ui/MainContent";
import OnSaleBook from "../components/ui/on-sale-book";
import useGetBooks from "../data/UseGetBooks";
import { useState } from "react";

type LayoutType = "grid" | "list";

function Filter() {
  const { books, pageRange, setPageRange, isLoading, isError, isSuccess } =
    useGetBooks();
  const [layout, setLayout] = useState<LayoutType>("grid");

  return (
    <>
      <Link to="/" className="text-red-500 underline">
        home
      </Link>
      {isError && <p>Fallo algo</p>}
      <div className="container m-auto ">
        <Header />
        <div className=" grid grid-cols-[400px,1fr] py-24 ">
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
