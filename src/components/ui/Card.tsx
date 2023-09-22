import { Rating, HeartIcon } from "./Icons";
import Button from "../../common/Button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Book } from "../../types/book";
import { useAppContext } from "../../bookContext/AppContext";

export function CardListLayout({ book }: { book: Book }) {
  const oldPrice = (book.price * 0.5 + book.price).toFixed(2);
  const categories = book.categories.name;
  const { getfavoriteBooks, favoriteBooks } = useAppContext();
  const indexOfCard = [...favoriteBooks].findIndex(
    (favoriteBook) => favoriteBook.id === book.id
  );

  // const { isFavorite, setIsFavorite } = useAppContext();

  return (
    <div className="flex rounded-sm p-[20px] gap-[40px] border border-gray-300 hover:scale-[1.01] duration-100 hover:shadow-2xl hover:shadow-purple-300">
      <div className="bg-[#c4c4c4] rounded-lg w-[250px] h-[300px] ">
        <img
          className=" object-contains h-full w-full select-none"
          src={book.cover}
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-start gap-4 ">
          <div>
            <h3 className="text-xl text-left font-bold hover:text-purple-600 line-clamp-3">
              <Link to={`/details/${book.slug}`}>{book.title}</Link>
            </h3>
            <p className="text-sm text-left mt-2 text-purple-600 font-medium cursor-pointer">
              {categories.toUpperCase()}
            </p>
          </div>
          <div>
            <Rating value={book.rating} />
            <div className="flex items-center gap-4">
              <span className="font-bold text-xl">
                {book.rating.toFixed(1)}
              </span>
              <span className="text-gray-100 text-sm truncate">
                {book.totalReviews > 10e3
                  ? (book.totalReviews / 10e3).toFixed(1) + "K"
                  : book.totalReviews}{" "}
                Reviews
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-justify text-sm mt-4 line-clamp-3">
            {book.synopsis}
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <h4 className="text-xl text-left font-bold m-2">
                $ {book.price.toFixed(2)}
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
                <p className="font-bold text-[18px] ">{book.author}</p>
              </div>
              <div>
                <span className="text-gray-100 text-sm">Publisher</span>
                <p className="font-bold text-[18px] ">{book.publisher}</p>
              </div>
              <div>
                <span className="text-gray-100 text-sm">Pages</span>
                <p className="font-bold text-[18px] ">{book.pages ?? 321}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="primary">
                <ShoppingCart />
                <span>Add to cart</span>
              </Button>
              <HeartIcon
                onClick={() => {
                  getfavoriteBooks(book);
                }}
                variant={!!favoriteBooks[indexOfCard]}
                bg="purple-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardComponent({ book }: { book: Book }) {
  const categories = book.categories.name;
  const { getfavoriteBooks, favoriteBooks } = useAppContext();

  // const indexOfCard = favoriteBooks.findIndex(
  //   (favoritedBook) => favoritedBook.id === book.id
  // );
  const indexOfCard = [...favoriteBooks].findIndex(
    (favoriteBook) => favoriteBook.id === book.id
  );
  // const indexOfCard = favoriteBooks.filter(
  //   (favoritedBook) => favoritedBook.id === book.id
  // );

  return (
    <div className="border-[1px] border-gray-200 rounded-lg p-4 flex flex-col items-center">
      <div className="bg-[#c4c4c4] rounded-lg relative w-full h-[320px]">
        <img
          className=" h-full w-full rounded-lg select-none"
          src={book.cover}
          alt=""
        />
        <div className="absolute top-[10px] right-[10px]">
          <HeartIcon
            onClick={() => {
              getfavoriteBooks(book);
            }}
            variant={!!favoriteBooks[indexOfCard]}
            bg="white"
          />
        </div>
      </div>
      <h3 className="text-xl text-center font-bold m-2 line-clamp-1 hover:text-purple-600">
        <Link to={`/details/${book.slug}`}>{book.title}</Link>
      </h3>
      <p className="text-sm text-center m-2 text-purple-600 font-medium cursor-pointer">
        {categories.toUpperCase()}
      </p>
      <Rating value={book.rating} />
    </div>
  );
}

export default CardComponent;
