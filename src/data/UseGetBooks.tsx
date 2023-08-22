// import React, { useState } from "react";
// import { Book } from "../types/type";
import { useQuery } from "@tanstack/react-query";
import {
  PageRange,
  getBooks,
  getBooksCategories,
  getBooksListLayout,
} from "../api/books";
import { useState } from "react";
import {
  BOOK_PAGINATION_COUNT,
  BOOK_PAGINATION_LIST,
} from "../constants/books";

function useGetBooks() {
  const [pageRange, setPageRange] = useState<PageRange>([
    0,
    BOOK_PAGINATION_COUNT - 1,
  ]);

  const handlePreviousPage = () => {
    window.scrollTo(0, 0);
    setPageRange(([startPage, endPage]: [number, number]) => [
      startPage - BOOK_PAGINATION_COUNT,
      endPage - BOOK_PAGINATION_COUNT,
    ]);
  };
  const handleNextPage = () => {
    window.scrollTo(0, 0);
    setPageRange(([startPage = 0, endPage = BOOK_PAGINATION_COUNT]) => [
      startPage + BOOK_PAGINATION_COUNT,
      endPage + BOOK_PAGINATION_COUNT,
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

export function useGetBooksCategories() {
  const { data } = useQuery({
    queryKey: ["bookListLayout"],
    queryFn: () => getBooksCategories(),
  });
  return { genres: data?.data ?? [] };
}

export default useGetBooks;
