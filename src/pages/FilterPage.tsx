import SideBar from "../components/ui/SideBar";
import MainContent from "../components/ui/MainContent";
import OnSaleBook from "../components/ui/OnSaleBook";
import useGetBooks, {
  useGetBooksCategories,
  useGetBooksListLayout,
} from "../data/UseGetBooks";
import { useState } from "react";

type LayoutType = "grid" | "list";

function Filter() {
  const {
    books,
    isLoading,
    isError,
    isSuccess,
    pageRange,
    handleNextPage,
    handlePreviousPage,
  } = useGetBooks();

  const {
    bookList,
    pageRangeList,
    handlePreviousPageList,
    handleNextPageList,
  } = useGetBooksListLayout();

  const { genres } = useGetBooksCategories();

  const [layout, setLayout] = useState<LayoutType>("grid");

  return (
    <>
      {isError && <p>Fallo algo</p>}
      <div className="container m-auto ">
        <div className=" grid grid-cols-[400px,1fr] py-10 mb-12 ">
          <SideBar genres={genres} />
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
