import SideBar from "../components/ui/SideBar";
import MainContent from "../components/ui/MainContent";
import OnSaleBook from "../components/ui/OnSaleBook";
import { useGetBooks } from "../hooks/books.ts";
import { useState } from "react";
import {
  BOOK_PAGINATION_GRID_COUNT,
  BOOK_PAGINATION_LIST_COUNT,
} from "../constants/books.ts";
import { LayoutType } from "../types/book.ts";

function Filter() {
  const [range, setRange] = useState<[number, number]>([6, 16]);
  const [layout, setLayout] = useState<LayoutType>(LayoutType.GRID);
  const [rating, setRating] = useState(0);

  const pageLimit =
    layout === LayoutType.GRID
      ? BOOK_PAGINATION_GRID_COUNT
      : BOOK_PAGINATION_LIST_COUNT;

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
  });

  const allPrices = books.map((book) => book.price);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  const priceRange: [number, number] = [
    Math.floor(minPrice),
    Math.floor(maxPrice) + 1,
  ];

  // const priceRangeBooks = books.filter((book) => {
  //   const [initialValue, finalValue] = range;
  //   return book.price >= initialValue && book.price <= finalValue;
  // });

  return (
    <>
      {isError && <p>Fallo algo</p>}
      <div className="container m-auto ">
        <div className=" grid grid-cols-[400px,1fr] py-10 mb-12 ">
          <SideBar
            rating={rating}
            setRating={setRating}
            range={range}
            setRange={setRange}
            priceRange={priceRange}
          />
          {isLoading && <p>Cargando...</p>}
          {isSuccess && (
            <MainContent
              books={books}
              // ratingBooks={ratingBooks}
              pageLimit={pageLimit}
              layout={layout}
              setLayout={setLayout}
              pageRange={pageRange}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
            />
          )}
        </div>
        <OnSaleBook />
      </div>
    </>
  );
}

export default Filter;
