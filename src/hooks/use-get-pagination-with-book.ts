import { useState } from "react";
import { getBooksWithPagination } from "../api/books.ts";
import { useQuery } from "@tanstack/react-query";
import { Book } from "../types/book.ts";

function useGetBooksWithPagination() {
  const [pageRange, setPageRange] = useState<[number, number]>([0, 11]);

  const {
    isLoading,
    isError,
    isSuccess,
    data: books,
    error,
  } = useQuery<Book[], Error, Book[]>(
    ["books-pagination", pageRange.join("-")],
    () => getBooksWithPagination(pageRange)
  );

  return {
    isLoading,
    isError,
    isSuccess,
    books: books ?? [],
    error,
    pageRange,
    setPageRange,
  };
}
// function useGetBooksWithPagination() {
//
//   const [pageRange, setPageRange] = useState<[number, number]>([0, 11]);
//   const [books, setBooks] = useState<Book[]>([]);
//   const [status, setStatus] = useState<
//     "idle" | "pending" | "success" | "error"
//   >("idle");
//   const [error, setError] = useState<Error | null>(null);
//
//   const isLoading = status === "pending";
//   const isError = status === "error";
//   const isSuccess = status === "success";
//
//   React.useEffect(() => {
//     setStatus("pending");
//     getBooksWithPagination(pageRange)
//       .then((data) => {
//         setBooks(data);
//         setStatus("success");
//       })
//       .catch((error: Error) => {
//         setStatus("error");
//         setError(error);
//       });
//   }, [pageRange]);
//
//   return {
//     books,
//     isLoading,
//     isError,
//     isSuccess,
//     pageRange,
//     setPageRange,
//     error,
//   };
// }

export default useGetBooksWithPagination;
