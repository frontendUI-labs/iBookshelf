import { Rating, HeartIcon } from "../ui/icons-component";
import useUpdateBookFavorite from "../../hooks/use-update-book-favorite.ts";

function CardComponent({
  cover,
  author,
  value,
  isFavorite,
  id,
  pageRange,
}: {
  cover: string;
  author: string;
  value: number;
  isFavorite: boolean;
  id: number;
  pageRange: [number, number];
}) {
  const mutation = useUpdateBookFavorite(id, isFavorite, pageRange);

  return (
    <div className="border-[1px] border-gray-200 rounded-lg p-4">
      <div className="bg-[#c4c4c4] rounded-lg relative w-full h-[320px]">
        <img
          className="object-cover h-full w-full rounded-lg"
          src={cover}
          alt=""
        />
        <div className="absolute top-0 right-0 bg-white">
          <HeartIcon
            onClick={() => {
              //   call backend endpoint
              mutation.mutate();
            }}
            border="border-transparent"
            color="purple-600"
            variant={
              isFavorite
                ? "active"
                : mutation.isLoading
                ? "loading"
                : "inactive"
            }
          />
        </div>
      </div>
      <h4 className="text-xl text-center font-bold m-2">{author}</h4>
      <p className="text-sm text-center m-2">ADVANTURE, SCIENCE, COMEDY</p>
      <Rating value={value} />
      {mutation.isLoading && (
        <p className={"bg-amber-500 w-10 h-10"}>Cargando...</p>
      )}
      {mutation.isError && (
        <p role={"alert"} className="text-red-600">
          Ups, something went wrong! <br /> {mutation.error?.message}
        </p>
      )}
    </div>
  );
}

export default CardComponent;
