import SideBar from "../components/ui/SideBar";
import MainContent from "../components/ui/MainContent";
import OnSaleBook from "../components/ui/OnSaleBook";
import { useGetBooks } from "../hooks/books.ts";
import { useEffect, useState } from "react";

export enum LayoutType {
  GRID = "grid",
  LIST = "list",
}

function Filter() {
  const [range, setRange] = useState<[number, number]>([6, 16]);
  const [layout, setLayout] = useState<LayoutType>(LayoutType.GRID);
  const [rating, setRating] = useState(0);

  const {
    books,
    isLoading,
    isError,
    isSuccess,
    pageRange,
    handleNextPage,
    handlePreviousPage,
  } = useGetBooks({
    pageLimit: layout === LayoutType.GRID ? 20 : 5,
  });

  const [totalBooks, setTotalBooks] = useState(books);
  useEffect(() => {
    setTotalBooks(books);
  }, []);

  console.log(totalBooks, books, "aca");

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
            setTotalBooks={setTotalBooks}
            setRating={setRating}
            range={range}
            setRange={setRange}
            priceRange={priceRange}
          />
          {isLoading && <p>Cargando...</p>}
          {isSuccess && (
            <MainContent
              books={books}
              totalBooks={totalBooks}
              // ratingBooks={ratingBooks}
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
