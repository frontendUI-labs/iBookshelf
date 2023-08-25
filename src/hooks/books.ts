import { useQuery } from "@tanstack/react-query";
import {
  getBooks,
  getBooksOnDiscount,
  getBooksRating,
  getRecommendedBooks,
} from "../api/books.ts";
import usePagination from "./pagination.ts";

export function useGetBooks({
  pageLimit,
  rating,
}: {
  pageLimit: number;
  rating: number;
}) {
  const { handlePreviousPage, handleNextPage, pageRange } =
    usePagination(pageLimit);

  const { isLoading, isError, data, error, isSuccess } = useQuery({
    queryKey: ["book", pageRange, rating],
    queryFn: () => getBooks(pageRange, { rating }),
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

export function useGetBooksOnDiscount() {
  const response = useQuery({
    queryKey: ["priceBooks"],
    queryFn: getBooksOnDiscount,
  });
  return {
    ...response,
    booksDiscount: response?.data?.data ?? [],
  };
}

export function useGetBooksRating(rating: number) {
  // const { pageLimit } = pageRange;
  // console.log(pageLimit, "pageRange");

  const response = useQuery({
    queryKey: ["ratingBooks", rating],
    queryFn: () => getBooksRating(rating),
  });
  return {
    ...response,

    ratingBooks: response?.data?.data ?? [],
  };
}
