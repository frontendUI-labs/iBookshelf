import { useQuery } from "@tanstack/react-query";
import {
  PageRange,
  getBooks,
  getBooksListLayout,
  getRecommendedBooks,
} from "../api/books.ts";
import { useEffect, useState } from "react";
import { BOOK_PAGINATION_LIST } from "../constants/books.ts";

export function useGetBooks({ pageLimit }: { pageLimit: number }) {
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

  const { isLoading, isError, data, error, isSuccess } = useQuery({
    queryKey: ["book", pageRange],
    queryFn: () => getBooks(pageRange),
  });

  return {
    isLoading,
    isError,
    books: data?.data ?? [],
    error,
    isSuccess,
    pageRange,
    handleNextPage,
    handlePreviousPage,
  };
}

export function useGetBooksListLayout() {
  const [pageRangeList, setPageRangeList] = useState<PageRange>([
    0,
    BOOK_PAGINATION_LIST - 1,
  ]);
  const handlePreviousPageList = () => {
    window.scrollTo(0, 0);
    setPageRangeList(([startPage, endPage]: [number, number]) => [
      startPage - BOOK_PAGINATION_LIST,
      endPage - BOOK_PAGINATION_LIST,
    ]);
  };
  const handleNextPageList = () => {
    window.scrollTo(0, 0);
    setPageRangeList(([startPage = 0, endPage = BOOK_PAGINATION_LIST]) => [
      startPage + BOOK_PAGINATION_LIST,
      endPage + BOOK_PAGINATION_LIST,
    ]);
  };

  const { data } = useQuery({
    queryKey: ["bookListLayout", pageRangeList],
    queryFn: () => getBooksListLayout(pageRangeList),
  });

  return {
    bookList: data?.data ?? [],
    pageRangeList,
    handlePreviousPageList,
    handleNextPageList,
  };
}

export function useGetRecommendedBooks() {
  const response = useQuery({
    queryKey: ["recommendedBooks"],
    queryFn: getRecommendedBooks,
  });

  return {
    ...response,
    recommendedBooks: response?.data ?? [],
  };
}
