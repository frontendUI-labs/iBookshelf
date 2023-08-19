import { StarIcon } from "./icons-component";
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

function SaleBooks() {
  return (
    <div>
      <div className="bg-[#c4c4c4] rounded-lg relative w-full h-[230px] mb-4 ">
        <img
          className="object-cover rounded-lg w-full h-full"
          src="https://marketplace.canva.com/EAE8SCCNlvo/1/0/1003w/canva-verde-y-rosa-ciencia-ficci%C3%B3n-portada-de-libro-SSKxUZUBOJg.jpg"
          alt=""
        />
        <div className="absolute top-[24px] left-0 bg-[#FF754C] w-[65px] h-[34px] flex items-center justify-center rounded-e-full">
          <span className="text-white">30%</span>
        </div>
      </div>
      <h3 className="text-base font-bold truncate">
        Terrible Madness Terrible MadnessTerrible Madness
      </h3>
      <p className="text-xs text-purple-600">THRILLE, DRAMA, HORROR</p>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-2">
          <StarIcon variant="active" />
          <span className="text-orange font-bold text-base">4.7</span>
        </div>
        <p className="text-base font-bold">
          $45.4{" "}
          <span className="text-xs text-gray-100 line-through">$98.4</span>
        </p>
      </div>
    </div>
  );
}

function OnSaleBook() {
  return (
    <div className=" relative">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-bold">Books on Sale</h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        navigation={{
          nextEl: ".feature-nextEl",
          prevEl: ".feature-prevEl",
          disabledClass: "hidden",
        }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true,
        //   pauseOnMouseEnter: true,
        // }}
        loop
        slidesPerView={6}
        slidesPerGroup={6}
        scrollbar={{
          draggable: true,
          hide: true,
        }}
        pagination={{ clickable: true }}
        className="mt-2 static slider-bullets"
      >
        {Array.from({ length: 24 }).map((_, id) => (
          <SwiperSlide key={id} className="mb-[50px]">
            <SaleBooks />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OnSaleBook;
