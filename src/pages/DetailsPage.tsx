import {
  FacebookIcon,
  Mail,
  MessagesSquare,
  ShieldCheck,
  ShoppingCart,
  ThumbsUp,
  Twitter,
  Zap,
} from "lucide-react";
import { HeartIcon, Rating } from "../components/ui/Icons";
import SocialButtons, {
  ButtonsSocials,
  MoreandLessButton,
} from "../components/ui/SocialButtons";
import { useState } from "react";
import Button from "../common/Button";
import { Link, useParams } from "react-router-dom";
import { useGetBookDetails } from "../hooks/books";
import TabsComponent from "../common/tabs";
import LayoutDetails from "../components/ui/LayoutDetails";
import OnSaleBook from "../components/ui/OnSaleBook";
import RelatedBooksContainer from "../common/related-books";
import ContainerBenefits from "../components/ui/BenefitsCard";

function Details() {
  const { bookSlug } = useParams<{
    bookSlug: string;
  }>();
  const [favorite, setFavorite] = useState(false); //active | inactive
  const { isSuccess, bookDetails } = useGetBookDetails(bookSlug as string);
  if (!bookDetails) return;

  const discount =
    isSuccess &&
    bookDetails.price - bookDetails.price * bookDetails?.discountPercentage;

  const bookCategory = bookDetails?.categorySlug;
  return (
    isSuccess && (
      <>
        <LayoutDetails>
          <div className="flex gap-[60px]">
            <img
              className="object-cover rounded-lg aspect-[3/4] h-full"
              src={bookDetails.cover}
              alt=""
            />
            <div className="flex flex-col gap-6 flex-1">
              <h1 className="text-3xl  text-left font-bold ">
                {bookDetails.title}
              </h1>
              <div className="flex justify-between items-end">
                <div className="text-purple-600 font-bold flex gap-4 fill-purple-600">
                  <Rating value={bookDetails.rating} />
                  <span>{bookDetails.rating}</span>
                  <MessagesSquare />
                  <span>
                    {bookDetails.totalReviews > 10e2
                      ? (bookDetails.totalReviews / 10e2).toFixed(1) + "K"
                      : bookDetails.totalReviews}{" "}
                    reviews
                  </span>
                  <ThumbsUp />
                  <span>456k likes</span>
                </div>
                <SocialButtons>
                  <ButtonsSocials bg="bg-[#1E33E5]">
                    <FacebookIcon />
                    Facebook
                  </ButtonsSocials>
                  <ButtonsSocials bg="bg-[#61C3E2]">
                    <Twitter />
                    Twitter
                  </ButtonsSocials>
                  <ButtonsSocials bg="bg-[#53C258]">
                    <MessagesSquare />
                    Whatsapp
                  </ButtonsSocials>
                  <ButtonsSocials bg="bg-gray-400">
                    <Mail />
                    Email
                  </ButtonsSocials>
                </SocialButtons>
              </div>
              <p className="text-justify text-lg mt-4 line-clamp-5">
                {bookDetails.synopsis}
              </p>
              <div className="flex items-center justify-between border-b-2 border-dotted pb-4">
                <div className="flex gap-4 items-center">
                  <div>
                    <span className="text-gray-100 text-sm">Writen by</span>
                    <p className="font-bold text-[18px] ">
                      {bookDetails.author}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-100 text-sm">Publisher</span>
                    <p className="font-bold text-[18px] ">
                      {bookDetails.publisher}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-100 text-sm">Pages</span>
                    <p className="font-bold text-[18px] ">
                      {bookDetails.pages}
                    </p>
                  </div>
                </div>
                <SocialButtons>
                  <ButtonsSocials bg="bg-purple-300">
                    <Zap className="fill-purple-600 text-purple-600" />
                    <span className="text-purple-600">FREE SHIPPING</span>
                  </ButtonsSocials>
                  <ButtonsSocials bg="bg-[#DDF5E4]">
                    <ShieldCheck className="fill-[#3EB760] " />
                    <span className="text-[#3EB760]">IN SOTCKS</span>
                  </ButtonsSocials>
                </SocialButtons>
              </div>
              <div className="flex justify-between items-start">
                <div className="flex gap-2 items-center ">
                  <h4 className="text-xl text-left font-bold m-2">
                    ${bookDetails.price}
                  </h4>
                  {bookDetails?.discountPercentage > 0 && (
                    <>
                      <span className="text-gray-100 text-xs line-through">
                        ${discount}
                      </span>
                      <span className="bg-orange-400 py-1 px-4 rounded-full text-white font-bold">
                        {bookDetails?.discountPercentage * 100}
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center">
                  <MoreandLessButton />
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
          <div className="grid grid-cols-[73%,1fr]">
            <TabsComponent bookinfo={bookDetails} />
            <div className="w-full">
              <RelatedBooksContainer
                bookCategory={bookCategory}
                bookSlug={bookSlug as string}
              />
              <Link
                className="w-full font-bold text-purple-600 bg-purple-400 flex items-center justify-center p-3 rounded-md hover:scale-105 duration-100 focus:scale-110 m-2"
                to={`/filter/${bookDetails.categorySlug}`}
              >
                View More
              </Link>
            </div>
          </div>
        </LayoutDetails>
        <ContainerBenefits bg="bg-purple-300" />
        <LayoutDetails>
          <OnSaleBook />
        </LayoutDetails>
      </>
    )
  );
}
export default Details;
