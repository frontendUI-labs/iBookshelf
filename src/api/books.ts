import { Book } from "../types/book.ts";

export const getBooksWithPagination = async (
  pageRange: [number, number]
): Promise<Book[]> => {
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

  if (!response.ok) {
    throw new Error(`Error fetching books, status code: ${response.status}`);
  }
  const booksResponse = await response.json();
  return booksResponse as Book[];
};
