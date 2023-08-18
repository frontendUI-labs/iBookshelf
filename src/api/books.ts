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

/*
curl -X PATCH 'https://oytjtiafvlwbvupijhqy.supabase.co/rest/v1/Books?some_column=eq.someValue' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Content-Type: application/json" \
-H "Prefer: return=minimal" \
-d '{ "other_column": "otherValue" }'
   */

export const updateBookFavoriteStatus = async (
  bookId: number,
  isFavorite: boolean
) => {
  const response = await fetch(
    `https://oytjtiafvlwbvupijhqy.supabase.co/rest/v1/Books?id=eq.${bookId}`,
    {
      headers: {
        apikey: import.meta.env["VITE_APP_SUPABASE_KEY"] as string,
        Authorization: `Bearer ${import.meta.env["VITE_APP_SUPABASE_KEY"]}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      method: "PATCH",
      body: JSON.stringify({ isFavorite }),
    }
  );
  if (!response.ok) {
    throw new Error(`Error updating book, status code: ${response.status}`);
  }
  console.log(response, "response");
  return response;
};
