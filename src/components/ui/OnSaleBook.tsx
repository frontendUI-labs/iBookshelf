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
import { Book } from "../../types/book";

function SaleBooks({ book }: { book: Book }) {
  const oldPrice = (book.price - book.price * book.discountPercentage).toFixed(
    1
  );
  return (
    <div>
      <div className="bg-[#c4c4c4] rounded-lg relative mb-4 ">
        <img
          className="object-cover rounded-lg aspect-[2/3]"
          src={book.cover}
          alt=""
        />
        <div className="absolute top-[24px] left-0 bg-[#FF754C] w-[65px] h-[34px] flex items-center justify-center rounded-e-full">
          <span className="text-white">{book.discountPercentage * 100}%</span>
        </div>
      </div>
      <h3 className="text-lg font-bold hover:text-purple-600 truncate">
        <Link to={`/details/${book.slug}`}>{book.title}</Link>
      </h3>
      <p className="text-sm text-purple-600 font-medium capitalize">
        {book.categorySlug}
      </p>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-2">
          <StarIcon variant="active" />
          <span className="text-orange font-bold text-base">
            {book.rating.toFixed(1)}
          </span>
        </div>
        <p className="text-base font-bold flex items-center gap-2">
          ${oldPrice}
          <span className="text-xs text-gray-100 line-through">
            ${book.price.toFixed(1)}
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
        breakpoints={{
          320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },

          1024: {
            slidesPerView: 5,
            slidesPerGroup: 3,
            spaceBetween: 100,
          },
        }}
        scrollbar={{
          draggable: true,
          hide: true,
        }}
        pagination={{ clickable: true }}
        className="mt-2 static slider-bullets"
      >
        {booksDiscount.map((book, id) => (
          <SwiperSlide key={id} className="mb-[50px]">
            <SaleBooks book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OnSaleBook;
