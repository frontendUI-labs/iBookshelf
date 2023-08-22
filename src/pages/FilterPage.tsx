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

  return (
    <>
      {isError && <p>Fallo algo</p>}
      <div className="container m-auto ">
        <div className=" grid grid-cols-[400px,1fr] py-10 mb-12 ">
          <SideBar
            categoriesFilter={categoriesFilter}
            updateCategoriesFilter={setCategoriesFilter}
          />
          {isLoading && <p>Cargando...</p>}
          {isSuccess && (
            <MainContent
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
        <OnSaleBook />
      </div>
    </>
  );
}

export default Filter;
