import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/categories.ts";

export function useGetCategories() {
  const response = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return {
    ...response,
    categories: response.data ?? [],
  };
}
