import { useState } from "react";
import { Rating, HeartIcon } from "./Icons";
import Button from "../../common/Button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export function CardListLayout({
  value,
  cover,
  author,
  title,
  price,
  synopsis,
  pages,
  publisher,
  totalReviews,
  slug,
}: {
  value: number;
  cover: string;
  author: string;
  title: string;
  price: number;
  synopsis: string;
  pages: number;
  publisher: string;
  totalReviews: number;
  slug: string;
}) {
  const oldPrice = (price * 0.5 + price).toFixed(2);
  const [favorite, setFavorite] = useState(false); //active | inactive

  return (
    <div className="flex rounded-sm p-[20px] gap-[40px] border border-gray-300 hover:scale-[1.01] duration-100 hover:shadow-2xl hover:shadow-purple-400">
      <div className="bg-[#c4c4c4] rounded-lg w-[250px] h-[300px] ">
        <img
          className=" object-contains h-full w-full select-none"
          src={cover}
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-start gap-4 ">
          <div>
            <h3 className="text-xl  text-left font-bold hover:text-purple-600 line-clamp-3">
              <Link to={`/details/${slug}`}>{title}</Link>
            </h3>
            <p className="text-sm text-left mt-2 text-purple-600">
              ADVANTURE, SCIENCE, COMEDY
            </p>
          </div>
          <div>
            <Rating value={value} />
            <div className="flex items-center gap-4">
              <span className="font-bold text-xl">{value.toFixed(1)}</span>
              <span className="text-gray-100 text-sm truncate">
                {totalReviews > 10e3
                  ? (totalReviews / 10e3).toFixed(1) + "K"
                  : totalReviews}{" "}
                Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-justify text-sm mt-4 line-clamp-3">{synopsis}</p>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <h4 className="text-xl text-left font-bold m-2">
                $ {price.toFixed(2)}
              </h4>
              <span className="text-gray-100 text-xs line-through">
                ${oldPrice}
              </span>
            </div>
            <div>
              <span className="p-2 border border-orange-400 rounded-lg text-sm text-orange-400">
                Get 20% Discount for todays
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div>
                <span className="text-gray-100 text-sm">Writen by</span>
                <p className="font-bold text-[18px] ">{author}</p>
              </div>
              <div>
                <span className="text-gray-100 text-sm">Publisher</span>
                <p className="font-bold text-[18px] ">{publisher}</p>
              </div>
              <div>
                <span className="text-gray-100 text-sm">Pages</span>
                <p className="font-bold text-[18px] ">{pages}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="primary">
                <ShoppingCart />
                <span>Add to cart</span>
              </Button>
              <HeartIcon
                onClick={() => {
                  setFavorite(!favorite);
                }}
                variant={favorite}
                bg="purple-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardComponent({
  cover,
  title,
  value,
  slug,
}: {
  cover: string;
  title: string;
  value: number;
  slug: string;
}) {
  const [favorite, setFavorite] = useState(false); //active | inactive
  return (
    <div className="border-[1px] border-gray-200 rounded-lg p-4">
      <div className="bg-[#c4c4c4] rounded-lg relative w-full h-[320px]">
        <img
          className=" h-full w-full rounded-lg select-none"
          src={cover}
          alt=""
        />
        <div className="absolute top-[10px] right-[10px]">
          <HeartIcon
            onClick={() => {
              setFavorite(!favorite);
            }}
            variant={favorite}
            bg="white"
          />
        </div>
      </div>
      <h3 className="text-xl text-center font-bold m-2 line-clamp-1 hover:text-purple-600">
        <Link to={`/details/${slug}`}>{title}</Link>
      </h3>
      <p className="text-sm text-center m-2 select-none text-purple-600">
        ADVANTURE, SCIENCE, COMEDY
      </p>
      <Rating value={value} />
    </div>
  );
}

export default CardComponent;
