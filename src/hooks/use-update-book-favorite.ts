import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBookFavoriteStatus } from "../api/books.ts";

const useUpdateBookFavorite = (
  id: number,
  isFavorite: boolean,
  pageRange: [number, number]
) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<unknown, Error, void, unknown>({
    mutationFn: () => updateBookFavoriteStatus(id, !isFavorite),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ["books-pagination", pageRange.join("-")],
      });
    },
  });

  return mutation;
};

export default useUpdateBookFavorite;
