import { ShoppingCart } from "lucide-react";
import { StarIcon } from "../components/ui/Icons";
import Button from "./Button";
import { useGetRelatedBooks } from "../hooks/books";
import { Link } from "react-router-dom";
import IsLoading from "../states/is-loading";
import { Book } from "../types/book";

function RelatedBooks({ relatedbook }: { relatedbook: Book }) {
  return (
    <div className="flex flex-col gap-4  mt-4 ">
      <div className="flex gap-4">
        <img
          className="object-cover aspect-[2/3] h-[190px] rounded-md"
          src={relatedbook.cover}
          alt=""
        />
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Link to={`/details/${relatedbook.slug}`}>
              <h3 className="text-purple-700 font-bold line-clamp-1 hover:text-purple-600">
                {relatedbook.title}
              </h3>
            </Link>
            <Link
              to={`/${relatedbook.categorySlug}`}
              className="text-purple-600 font-bold text-[15px] capitalize"
            >
              {relatedbook.categorySlug}
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
          <Button variant="icon">
            {" "}
            <ShoppingCart />
            <span>Add to cart</span>
          </Button>
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

  return (
    <div className="p-4 pr-0 font-heading">
      <h2 className="font-bold text-3xl text-purple-700">Related Books</h2>
      {isLoading && <IsLoading />}
      {relatedBooks?.map((relatedbook) => (
        <RelatedBooks key={relatedbook.id} relatedbook={relatedbook} />
      ))}
    </div>
  );
}

export default RelatedBooksContainer;
