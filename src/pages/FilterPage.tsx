import SideBar from "../components/ui/SideBar";
import MainContent from "../components/ui/MainContent";
import OnSaleBook from "../components/ui/OnSaleBook";
import { useGetBooks, useGetBooksListLayout } from "../hooks/books.ts";
import { useState } from "react";

export enum LayoutType {
  GRID = "grid",
  LIST = "list",
}

function Filter() {
  const [categoriesFilter, setCategoriesFilter] = useState<string[]>([]);
  const [range, setRange] = useState([6, 16]);

  const {
    books,
    isLoading,
    isError,
    isSuccess,
    pageRange,

    handleNextPage,
    handlePreviousPage,
  } = useGetBooks({
    categories: categoriesFilter,
  });

  const {
    bookList,
    pageRangeList,
    handlePreviousPageList,
    handleNextPageList,
  } = useGetBooksListLayout();

  const [layout, setLayout] = useState<LayoutType>(LayoutType.GRID);
  const booksOnDiscount = books.filter((book) => {
    return book.discountPercentage > 0;
  });
  const allPrices = books.map((book) => book.price);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  const priceRange = [Math.floor(minPrice), Math.floor(maxPrice) + 1];

  const priceRangeBooks = books.filter((book) => {
    const initialValue = range[0];
    const finalValue = range[1];

    return book.price >= initialValue && book.price <= finalValue;
  });

  return (
    <>
      {isError && <p>Fallo algo</p>}
      <div className="container m-auto ">
        <div className=" grid grid-cols-[400px,1fr] py-10 mb-12 ">
          <SideBar
            range={range}
            setRange={setRange}
            priceRange={priceRange}
            books={books}
            categoriesFilter={categoriesFilter}
            updateCategoriesFilter={setCategoriesFilter}
          />
          {isLoading && <p>Cargando...</p>}
          {isSuccess && (
            <MainContent
              priceRangeBooks={priceRangeBooks}
              layout={layout}
              setLayout={setLayout}
              books={books}
              pageRange={pageRange}
              bookList={bookList}
              pageRangeList={pageRangeList}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
              handlePreviousPageList={handlePreviousPageList}
              handleNextPageList={handleNextPageList}
            />
          )}
        </div>
        <OnSaleBook booksOnDiscount={booksOnDiscount} />
      </div>
    </>
  );
}

export default Filter;
