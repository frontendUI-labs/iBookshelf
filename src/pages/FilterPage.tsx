import SideBar from "../components/ui/SideBar";
import MainContent from "../components/ui/MainContent";
import OnSaleBook from "../components/ui/OnSaleBook";
import { useGetBookPrices, useGetBooks } from "../hooks/books.ts";
import { useState } from "react";
import {
  BOOK_PAGINATION_GRID_COUNT,
  BOOK_PAGINATION_LIST_COUNT,
} from "../constants/books.ts";
import { LayoutType } from "../types/book.ts";
import { useParams } from "react-router-dom";
import ContainerBenefits from "../components/ui/BenefitsCard.tsx";
import { useSelector } from "react-redux";
import { RootInputState } from "../redux/store.tsx";

function Filter() {
  const searchQuery = useSelector(
    (state: RootInputState) => state.app.searchQuery
  );

  const [range, setRange] = useState<[number, number]>([0, 16]);
  const [orderBooks, setOrderBooks] = useState(false);
  const [layout, setLayout] = useState<LayoutType>(LayoutType.GRID);
  const [rating, setRating] = useState(0);
  const { category: selectedCategory } = useParams();
  const pageLimit =
    layout === LayoutType.GRID
      ? BOOK_PAGINATION_GRID_COUNT
      : BOOK_PAGINATION_LIST_COUNT;
  const [initialRange, finalRange] = range;

  const {
    books,
    isLoading,
    isError,
    isSuccess,
    pageRange,
    handleNextPage,
    handlePreviousPage,
  } = useGetBooks({
    pageLimit,
    rating,
    category: selectedCategory as string,
    initialRange,
    finalRange,
    orderBooks,
    searchQuery,
  });

  const { bookprices } = useGetBookPrices();
  const eachPrice = bookprices?.map((book) => book.price);
  const minPrice = Math.min(...eachPrice);
  const maxPrice = Math.max(...eachPrice);
  const priceRange: [number, number] = [
    Math.floor(minPrice),
    Math.floor(maxPrice) + 1,
  ];

  return (
    <>
      {isError && <p>Fallo algo</p>}
      <div className="container m-auto font-heading">
        <div className=" grid grid-cols-[400px,1fr] py-10 mb-12 ">
          <SideBar
            setOrderBooks={setOrderBooks}
            selectedCategory={selectedCategory as string}
            rating={rating}
            setRating={setRating}
            range={range}
            setRange={setRange}
            priceRange={priceRange}
          />
          <MainContent
            isSuccess={isSuccess}
            isLoading={isLoading}
            books={books}
            pageLimit={pageLimit}
            layout={layout}
            setLayout={setLayout}
            pageRange={pageRange}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </div>
        <OnSaleBook />
        <ContainerBenefits />
      </div>
    </>
  );
}

export default Filter;
