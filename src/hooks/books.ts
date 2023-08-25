import { useQuery } from "@tanstack/react-query";
import {
  getBooks,
  getBooksOnDiscount,
  getBooksRating,
  getRecommendedBooks,
} from "../api/books.ts";
import usePagination from "./pagination.ts";

export function useGetBooks({ pageLimit }: { pageLimit: number }) {
  const { handlePreviousPage, handleNextPage, pageRange } =
    usePagination(pageLimit);

  // useEffect(() => {
  //   setPageRange([0, pageLimit - 1]);
  // }, [pageLimit]);

  // const handlePreviousPage = () => {
  //   window.scrollTo(0, 0);
  //   setPageRange(([startPage, endPage]: [number, number]) => [
  //     startPage - pageLimit,
  //     endPage - pageLimit,
  //   ]);
  // };
  // const handleNextPage = () => {
  //   window.scrollTo(0, 0);
  //   setPageRange(([startPage = 0, endPage = pageLimit]) => [
  //     startPage + pageLimit,
  //     endPage + pageLimit,
  //   ]);
  // };

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
