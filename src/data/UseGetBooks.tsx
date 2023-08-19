import React, { useState } from "react";
export type Book = {
  author: string;
  cover: string;
  created_at: string;
  genreId: null;
  id: number;
  isFavorite: null;
  pages: null;
  price: number;
  publisher: null;
  reviewsCount: number;
  reviewsStar: number;
  synopsis: null;
  title: string;
  year: null;
};

function useGetBooks() {
  const [pageRange, setPageRange] = useState<[number, number]>([0, 11]);
  const [books, setBooks] = useState<Book[]>([]);
  const [status, setStatus] = useState("idle");
  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "success";

  React.useEffect(() => {
    setStatus("pending");
    const getAllBooks = async (): Promise<Book[]> => {
      const response = await fetch(
        "https://oytjtiafvlwbvupijhqy.supabase.co/rest/v1/Books?select=*",
        {
          headers: {
            apikey: import.meta.env["VITE_APP_SUPABASE_KEY"] as string,
            Authorization: `Bearer ${import.meta.env["VITE_APP_SUPABASE_KEY"]}`,
            Range: pageRange.join("-"),
          },
        }
      );
      const waitBooks = await response.json();

      return waitBooks as Book[];
    };
    getAllBooks()
      .then((data) => {
        setBooks(data);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [pageRange]);
  return { books, isLoading, isError, isSuccess, pageRange, setPageRange };
}

export default useGetBooks;
