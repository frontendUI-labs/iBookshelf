import { useQuery } from "@tanstack/react-query";
import { getBooksCategories } from "../api/categories.ts";

export function useGetBooksCategories() {
  const response = useQuery({
    queryKey: ["categories"],
    queryFn: getBooksCategories,
  });
  return {
    ...response,
    categories: response.data ?? [],
  };
}
