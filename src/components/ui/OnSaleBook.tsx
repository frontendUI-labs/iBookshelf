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
import { Link } from "react-router-dom";
import { useGetBooksOnDiscount } from "../../hooks/books";

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
      <div className="bg-[#c4c4c4] rounded-lg relative mb-4 ">
        <img
          className="object-cover rounded-lg aspect-[2/3]"
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
          <span className="text-orange font-bold text-base">
            {rating.toFixed(1)}
          </span>
        </div>
        <p className="text-base font-bold flex items-center gap-2">
          ${oldPrice}
          <span className="text-xs text-gray-100 line-through">
            ${price.toFixed(1)}
          </span>
        </p>
      </div>
    </div>
  );
}

function OnSaleBook() {
  const { booksDiscount } = useGetBooksOnDiscount();

  return (
    <div className=" relative">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-bold">Books on Sale</h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={5}
        slidesPerGroup={4}
        scrollbar={{
          draggable: true,
          hide: true,
        }}
        pagination={{ clickable: true }}
        className="mt-2 static slider-bullets"
      >
        {booksDiscount.map((book, id) => (
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
