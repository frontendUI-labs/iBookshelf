import { StarIcon } from "./Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { Book } from "../../types/type";
import { Link } from "react-router-dom";

function SaleBooks({
  title,
  category,
  rating,
  price,
  discount,
  cover,
  slug,
}: {
  title: string;
  category: string;
  rating: number;
  price: number;
  discount: number;
  cover: string;
  slug: string;
}) {
  const oldPrice = (price - price * discount).toFixed(1);
  return (
    <div>
      <div className="bg-[#c4c4c4] rounded-lg relative w-full h-[350px] mb-4 ">
        <img
          className="object-contains rounded-lg w-full h-full"
          src={cover}
          alt=""
        />
        <div className="absolute top-[24px] left-0 bg-[#FF754C] w-[65px] h-[34px] flex items-center justify-center rounded-e-full">
          <span className="text-white">{discount * 100}%</span>
        </div>
      </div>
      <h3 className="text-lg font-bold hover:text-purple-600 truncate">
        <Link to={`/details/${slug}`}>{title}</Link>
      </h3>
      <p className="text-sm text-purple-600 font-medium capitalize">
        {category}
      </p>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-2">
          <StarIcon variant="active" />
          <span className="text-orange font-bold text-base">{rating}</span>
        </div>
        <p className="text-base font-bold flex items-center gap-2">
          {oldPrice}
          <span className="text-xs text-gray-100 line-through">{price}</span>
        </p>
      </div>
    </div>
  );
}

function OnSaleBook({ booksOnDiscount }: { booksOnDiscount: Book[] }) {
  const concatBooks = booksOnDiscount.concat(booksOnDiscount);

  return (
    <div className=" relative">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-bold">Books on Sale</h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        // navigation={{
        //   nextEl: ".feature-nextEl",
        //   prevEl: ".feature-prevEl",
        //   disabledClass: "hidden",
        // }}
        autoplay={{
          delay: 500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop
        slidesPerView={5}
        slidesPerGroup={5}
        scrollbar={{
          draggable: true,
          hide: true,
        }}
        pagination={{ clickable: true }}
        className="mt-2 static slider-bullets"
      >
        {concatBooks.map((book, id) => (
          <SwiperSlide key={id} className="mb-[50px]">
            <SaleBooks
              cover={book.cover}
              title={book.title}
              category={book.categorySlug}
              rating={book.rating}
              price={book.price}
              discount={book.discountPercentage}
              slug={book.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OnSaleBook;
