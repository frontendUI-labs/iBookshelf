import { useQuery } from "@tanstack/react-query";
import {
  getBookDetails,
  getBooks,
  getBooksOnDiscount,
  getBooksPrice,
  getBooksRating,
  getRecommendedBooks,
  getRelatedBooks,
} from "../api/books.ts";
import usePagination from "./pagination.ts";

export function useGetBooks({
  pageLimit,
  rating,
  category,
  initialRange,
  finalRange,
  orderBooks,
}: {
  pageLimit: number;
  rating: number;
  category: string;
  initialRange: number;
  finalRange: number;
  orderBooks: boolean;
}) {
  const { handlePreviousPage, handleNextPage, pageRange } =
    usePagination(pageLimit);

  const { isLoading, isError, data, error, isSuccess } = useQuery({
    queryKey: [
      "book",
      pageRange,
      rating,
      category,
      initialRange,
      finalRange,
      orderBooks,
    ],
    queryFn: () =>
      getBooks(pageRange, orderBooks, {
        rating,
        category,
        initialRange,
        finalRange,
      }),
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

export function useGetBookDetails(bookSlug: string) {
  const response = useQuery({
    queryKey: ["bookDetails", bookSlug],
    queryFn: () => getBookDetails(bookSlug),
  });

  return { ...response, bookDetails: response.data?.data?.[0] };
}

export function useGetRelatedBooks(bookCategory: string, bookSlug: string) {
  const response = useQuery({
    queryKey: ["relatedBooks", bookCategory, bookSlug],
    queryFn: () => getRelatedBooks(bookCategory, bookSlug),
  });

  return { ...response, relatedBooks: response?.data?.data };
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
export function useGetBookPrices() {
  const response = useQuery({
    queryKey: ["pricerange"],
    queryFn: getBooksPrice,
  });
  return {
    ...response,
    bookprices: response?.data?.data ?? [],
  };
}

export function useGetBooksRating(rating: number) {
  const response = useQuery({
    queryKey: ["ratingBooks", rating],
    queryFn: () => getBooksRating(rating),
  });
  return {
    ...response,

    ratingBooks: response?.data?.data ?? [],
  };
}
