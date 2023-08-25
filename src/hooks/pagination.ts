import { useEffect, useState } from "react";
import { PageRange } from "../api/books";

const usePagination = (pageLimit: number) => {
  const [pageRange, setPageRange] = useState<PageRange>([0, pageLimit - 1]);

  useEffect(() => {
    setPageRange([0, pageLimit - 1]);
  }, [pageLimit]);

  const handlePreviousPage = () => {
    window.scrollTo(0, 0);
    setPageRange(([startPage, endPage]: [number, number]) => [
      startPage - pageLimit,
      endPage - pageLimit,
    ]);
  };
  const handleNextPage = () => {
    window.scrollTo(0, 0);
    setPageRange(([startPage = 0, endPage = pageLimit]) => [
      startPage + pageLimit,
      endPage + pageLimit,
    ]);
  };

  return { handlePreviousPage, handleNextPage, pageRange };
};

export default usePagination;
