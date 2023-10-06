import { StarIcon } from "../components/ui/Icons";
import { useGetRelatedBooks } from "../hooks/books";
import { Link } from "react-router-dom";
import IsLoading from "../states/is-loading";
import CartButton from "../components/ui/CartButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Book } from "../types/book";

function RelatedBooks({
  relatedbook,
  onClick,
}: {
  relatedbook: Book;
  onClick: () => void;
}) {
  // function RelatedBooks({
  //   cover,
  //   title,
  //   category,
  //   rate,
  //   totalReviews,
  //   price,
  //   slug,
  //   onClick,
  // }: {
  //   cover: string;
  //   title: string;
  //   category: string;
  //   rate: number;
  //   totalReviews: number;
  //   price: number;
  //   slug: string;
  //   onClick?: () => void;
  // }) {
  return (
    <div className="flex flex-col gap-4  mt-4 ">
      <div className="flex gap-4">
        <Link to={`/details/${relatedbook.slug}`}>
          <img
            className="object-cover  aspect-[4/3] h-[190px] rounded-md border-[0.5px] border-slate-600 hover:scale-105 duration-200"
            src={relatedbook.cover}
            alt=""
          />
        </Link>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-purple-700 font-bold line-clamp-1 hover:text-purple-600">
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={`/details/${relatedbook.slug}`}
              >
                {relatedbook.title}
              </Link>
            </h3>
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to={`/filter/${relatedbook.categorySlug}`}
            >
              <p className="text-purple-600 font-bold text-[15px] capitalize hover:text-orange-600">
                {relatedbook.categorySlug}
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-2 ">
            <StarIcon variant="active" />
            <span className="text-orange-400 font-bold">
              {relatedbook.rating}
            </span>
            <span className="text-gray-100">
              {relatedbook.totalReviews > 10e2
                ? (relatedbook.totalReviews / 10e2).toFixed(1) + "K"
                : relatedbook.totalReviews}{" "}
              reviews
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <h4 className="font-bold text-xl">
              ${relatedbook.price.toFixed(2)}
            </h4>
            <span className="text-gray-100 text-xs line-through">$98.4</span>
          </div>
          <CartButton
            onClick={onClick}
            bg="bg-slate-100 p-1 text-purple-600 hover:bg-trasnparent"
            text="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
}

function RelatedBooksContainer({
  bookCategory,
  bookSlug,
}: {
  bookCategory: string;
  bookSlug: string;
}) {
  const { relatedBooks, isLoading } = useGetRelatedBooks(
    bookCategory,
    bookSlug
  );

  const dispatch = useDispatch();
  const handleAddToCart = (book: Book) => {
    dispatch(addToCart(book));
  };

  if (!relatedBooks) return;
  return (
    <div className="p-4 pr-0 font-heading">
      <h2 className="font-bold text-3xl text-purple-700">Related Books</h2>
      {isLoading && <IsLoading />}
      {relatedBooks?.map((relatedbook) => (
        <RelatedBooks
          key={relatedbook.id}
          relatedbook={relatedbook}
          onClick={() => {
            handleAddToCart(relatedbook);
          }}
        />
      ))}
    </div>
  );
}

export default RelatedBooksContainer;
