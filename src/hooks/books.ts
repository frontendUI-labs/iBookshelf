import { useQuery } from "@tanstack/react-query";
import {
  getBooks,
  getRecommendedBooks,
  getPopularBooks,
  getBooksFlashDiscount,
  getBooksFeature,
  getBookDetails,
  getBooksOnDiscount,
  getBooksPrice,
  getBooksRating,
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
  inputValue,
}: {
  pageLimit: number;
  rating: number;
  category: string;
  initialRange: number;
  finalRange: number;
  orderBooks: boolean;
  inputValue: string;
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
      inputValue,
    ],
    queryFn: () =>
      getBooks(pageRange, orderBooks, {
        rating,
        category,
        initialRange,
        finalRange,
        inputValue,
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

export function useGetBooksRecomended() {
  const response = useQuery({
    queryKey: ["recomendedBooks"],
    queryFn: getRecommendedBooks,
  });
  return {
    ...response,
    booksRecomended: response?.data ?? [],
  };
}

export function useGetBooksPopular() {
  const response = useQuery({
    queryKey: ["popularBooks"],
    queryFn: getPopularBooks,
  });
  return {
    ...response,
    booksPopular: response?.data ?? [],
  };
}

export function useGetBooksFlashDiscount() {
  const repsonse = useQuery({
    queryKey: ["flashDiscountBooks"],
    queryFn: getBooksFlashDiscount,
  });
  return {
    ...repsonse,
    bookFlashDiscount: repsonse?.data?.data ?? [],
  };
}

export function useGetBooksFeature() {
  const response = useQuery({
    queryKey: ["featureBooks"],
    queryFn: getBooksFeature,
  });
  return {
    ...response,
    booksFeature: response?.data?.data ?? [],
  };
}
