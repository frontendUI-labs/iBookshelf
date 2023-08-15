import { useState } from "react";
import { Rating, HeartIcon } from "../ui/icons-component";

function CardComponent({
  cover,
  author,
  value,
}: {
  cover: string;
  author: string;
  value: number;
}) {
  const [favorite, setFavorite] = useState(false); //active | inactive
  return (
    <div className="border-[1px] border-gray-200 rounded-lg p-4">
      <div className="bg-[#c4c4c4] rounded-lg relative w-full h-[320px]">
        <img
          className="object-cover h-full w-full rounded-lg"
          src={cover}
          alt=""
        />
        <div className="absolute top-0 right-0">
          <HeartIcon
            onClick={() => {
              setFavorite(!favorite);
            }}
            border="border-transparent"
            color="purple-600"
            variant={favorite}
          />
        </div>
      </div>
      <h4 className="text-xl text-center font-bold m-2">{author}</h4>
      <p className="text-sm text-center m-2">ADVANTURE, SCIENCE, COMEDY</p>
      <Rating value={value} />
    </div>
  );
}

export default CardComponent;
