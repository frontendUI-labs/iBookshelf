import { ShoppingCart } from "lucide-react";
import { StarIcon } from "../components/ui/Icons";
import Button from "./Button";
import { useGetRelatedBooks } from "../hooks/books";
import { Link } from "react-router-dom";

function RelatedBooks({
  cover,
  title,
  category,
  rate,
  totalReviews,
  price,
  slug,
}: {
  cover: string;
  title: string;
  category: string;
  rate: number;
  totalReviews: number;
  price: number;
  slug: string;
}) {
  return (
    <div className="flex flex-col gap-4 p-2 mt-4">
      <div className="flex gap-4">
        <img
          className="object-cover aspect-[2/3] h-[190px] rounded-md"
          src={cover}
          alt=""
        />
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Link to={`/details/${slug}`}>
              <h3 className="text-purple-700 font-bold line-clamp-1 hover:text-purple-600">
                {title}
              </h3>
            </Link>
            <p className="text-purple-600 font-bold text-[15px] capitalize">
              {category}
            </p>
          </div>
          <div className="flex items-center gap-2 ">
            <StarIcon variant="active" />
            <span className="text-orange-400 font-bold">{rate}</span>
            <span className="text-gray-100">
              {totalReviews > 10e2
                ? (totalReviews / 10e2).toFixed(1) + "K"
                : totalReviews}{" "}
              reviews
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <h4 className="font-bold text-xl">${price.toFixed(2)}</h4>
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
  const { relatedBooks } = useGetRelatedBooks(bookCategory, bookSlug);
  console.log(relatedBooks, "bookCategory");

  if (!relatedBooks) return;
  return (
    <div className="p-4 w-full">
      <h2 className="font-bold text-3xl text-purple-700">Related Books</h2>
      {relatedBooks.map((relatedbook) => (
        <RelatedBooks
          key={relatedbook.id}
          cover={relatedbook.cover}
          title={relatedbook.title}
          category={relatedbook.categorySlug}
          rate={relatedbook.rating}
          totalReviews={relatedbook.totalReviews}
          price={relatedbook.price}
          slug={relatedbook.slug}
        />
      ))}
    </div>
  );
}

export default RelatedBooksContainer;
