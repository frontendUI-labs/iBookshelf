import { Link } from "@tanstack/router";
import Header from "../components/layout/header";
import SideBar from "../components/ui/SideBar";
import MainContent from "../components/ui/MainContent";
import OnSaleBook from "../components/ui/on-sale-book";
import useGetBooksWithPagination from "../hooks/use-get-pagination-with-book.ts";

function Filter() {
  return (
    <>
      <Link to="/" className="text-red-500 underline">
        home
      </Link>
      <Header />
      <div className="container m-auto py-24">
        <div className=" grid grid-cols-[400px,1fr] ">
          <SideBar />
          <MainContent />
        </div>
        <OnSaleBook />
      </div>
    </>
  );
}

export default Filter;
