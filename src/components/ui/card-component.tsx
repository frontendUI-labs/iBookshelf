import { useState } from "react";
import { Rating, HeartIcon } from "../ui/icons-component";
import Button from "../../common/Button";
import { ShoppingCart } from "lucide-react";

export function CardListLayout({
  value,
  cover,
  author,
  title,
  price,
}: {
  value: number;
  cover: string;
  author: string;
  title: string;
  price: number;
}) {
  const oldPrice = (price * 0.5 + price).toFixed(2);

  return (
    <div className="flex rounded-sm p-[20px] gap-[40px] border border-gray-300 hover:scale-[1.01] duration-100 hover:shadow-2xl hover:shadow-purple-400">
      <div className="bg-[#c4c4c4] rounded-lg w-[250px] h-[300px] ">
        <img
          className="rounded-lg object-cover h-full w-full"
          src={cover}
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-start gap-4 ">
          <div>
            <h3 className="text-xl text-left font-bold ">{title}</h3>
            <p className="text-sm text-left mt-2 text-purple-600">
              ADVANTURE, SCIENCE, COMEDY
            </p>
          </div>
          <div>
            <Rating value={value} />
            <div className="flex items-center gap-4">
              <span className="font-bold text-xl">{value}</span>
              <span className="text-gray-100 text-sm">235 Reviews</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-justify text-sm mt-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <h4 className="text-xl text-left font-bold m-2">$ {price}</h4>
              <span className="text-gray-100 text-xs line-through">
                ${oldPrice}
              </span>
            </div>
            <div>
              <span className="p-2 border border-orange rounded-lg text-sm text-orange  ">
                Get 20% Discount for today
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
                <p className="font-bold text-[18px] ">Printarea Studios</p>
              </div>
              <div>
                <span className="text-gray-100 text-sm">Year</span>
                <p className="font-bold text-[18px] ">2019</p>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="primary">
                <ShoppingCart />
                <span>Add to cart</span>
              </Button>
              <HeartIcon bg="purple-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          className="object-cover h-full w-full rounded-lg select-none"
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
      <h4 className="text-xl text-center font-bold m-2 select-none">
        {author}
      </h4>
      <p className="text-sm text-center m-2 select-none">
        ADVANTURE, SCIENCE, COMEDY
      </p>
      <Rating value={value} />
    </div>
  );
}

export default CardComponent;
