import React, { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  Zap,
  ThumbsUp,
  ShieldCheck,
  Star,
} from "lucide-react";

import Benefits from "../components/ui/BenefitsCard";
// eslint-disable-next-line no-duplicate-imports
import type { ReactNode } from "react";
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

const PointsIcon = ({
  color,
  orientation = "vertical",
  className,
}: {
  color: string;
  orientation: "vertical" | "horizontal";
  className: string;
}) => {
  return (
    <div
      className={twMerge(
        "absolute",
        orientation === "vertical" ? "w-[50px]" : "w-[100px]",
        className
      )}
    >
      <div className="flex flex-wrap">
        {Array.from({ length: 18 }).map((_, id) => (
          <div
            key={id}
            className={twMerge("w-2 h-2 rounded-full bg-red-500 m-1", color)}
          />
        ))}
      </div>
    </div>
  );
};

const CircleDecoration = ({
  color,
  width,
  height,
  className,
}: {
  color: string;
  width: string;
  height: string;
  className: string;
}) => {
  const circleStyle = {
    width: width,
    height: height,
  };
  return (
    <div
      className={twMerge(
        "absolute bg-orange-300 rounded-full",
        color,
        className
      )}
      style={circleStyle}
    ></div>
  );
};

const PageCarousel = ({ color }: { color: string }) => {
  return (
    <div className="grid grid-cols-4 relative">
      {Array.from({ length: 4 }).map((_, id) => (
        <div
          key={id}
          className={twMerge(
            "bg-gray-400 w-[140px] h-[195px] rounded-xl border-4 border-white",
            color
          )}
        />
      ))}
    </div>
  );
};
const CarouselContainer = ({ children }: { children: ReactNode }) => {
  const [activePage, setActivePage] = useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePage];

  function goBack() {
    setActivePage((page) => page - 1);
  }

  function goNext() {
    setActivePage((page) => page + 1);
  }
  return (
    <div className="relative">
      <div>{currentPage}</div>
      <div className="transition-transform duration-5000 ease-in-out">
        {activePage > 0 ? (
          <button onClick={goBack}>
            <ChevronLeftCircle className=" absolute -left-5 top-1/2 -translate-y-1/2 fill-white w-12 h-12" />
          </button>
        ) : null}
        {activePage < pages.length - 1 ? (
          <button onClick={goNext}>
            <ChevronRightCircle className=" absolute right-0 top-1/2 -translate-y-1/2 fill-white w-12 h-12" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

function BooksRecomended({
  color,
  children,
  title,
  description,
}: {
  color?: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div
      className={twMerge(
        "relative overflow-hidden font-heading h-[445px] bg-blue-100 rounded-3xl px-[70px] py-[40px] flex flex-col justify-between",
        color
      )}
    >
      <>{children}</>
      <div>
        <h3 className="text-4xl font-semibold mb-8 relative">{title}</h3>
        <p className="text-sm w-9/12 font-basic font-light relative">
          {description}
        </p>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          className="relative"
          slidesPerView={4}
          slidesPerGroup={4}
          navigation={{
            nextEl: ".feature-nextEl",
            prevEl: ".feature-prevEl",
            disabledClass: "hidden",
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {Array.from({ length: 12 }).map((_, id) => (
            <SwiperSlide>
              <div
                key={id}
                className={twMerge(
                  "bg-gray-400  h-[195px] rounded-xl border-4 border-white",
                  id > 6 ? "bg-red-400" : "bg-orange-400"
                )}
              />
            </SwiperSlide>
          ))}
          {/*<SwiperSlide>*/}
          {/*  <PageCarousel color="" />*/}
          {/*</SwiperSlide>*/}
          {/*<SwiperSlide>*/}
          {/*  <PageCarousel color="bg-orange-400" />*/}
          {/*</SwiperSlide>*/}
          {/*<SwiperSlide>*/}
          {/*  <PageCarousel color="bg-purple-600" />*/}
          {/*</SwiperSlide>*/}
          <div className="">
            <button className="feature-prevEl absolute z-10 -left-5 top-1/2 -translate-y-1/2">
              <ChevronLeftCircle className="fill-white  w-12 h-12 " />
            </button>
            <button className="feature-nextEl absolute z-10 right-0 top-1/2 -translate-y-1/2 ">
              <ChevronRightCircle className=" fill-white w-12 h-12" />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

const SpecialsBooks = () => {
  return (
    <div className="w-[515px] h-[700px]">
      <div className="h-[300px] w-full bg-gray-100"></div>
      <div className="text-start p-7">
        <h3 className="text-2xl font-semibold my-5">Terrible Madness</h3>
        <div>
          <button className="bg-purple-400 p">BIOGRAPHY</button>
        </div>
        <p className="text-base font-normal font-basic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris{" "}
        </p>
        <p className="text-base font-semibold font-basic">David Here</p>
        <div className="flex justify-between">
          <button className="bg-purple-600 py-3 px-12 rounded-xl">
            <span className="text-lg font-semibold">Add to cart</span>
          </button>
          <p className="flex">
            <span className="text-2xl font-semibold">$18,78</span>
            <span className="text-xl font-normal">$25</span>
          </p>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const iconClassName = "text-purple-600 fill-purple-600 w-[25px] h-[25px]";

  return (
    <>
      <Link to="/filter" className="text-red-500 underline">
        FilterPage
      </Link>
      <div className="px-[120px] py-[51px] font-heading">
        <div className="grid grid-cols-[3fr,1fr] gap-x-3 h-[662px] mb-[60px]">
          <div className="relative bg-purple-400 rounded-3xl p-24 overflow-hidden">
            <PointsIcon
              className="top-10 left-10"
              orientation="vertical"
              color="bg-purple-200"
            />
            <CircleDecoration
              width="600px"
              height="600px"
              className="-top-64 -right-1/4"
              color="bg-orange-400"
            />
            <div className="flex flex-col gap-10 w-[480px]">
              <p className="text-purple-600 font-bold text-lg tracking-[4px]">
                BACK TO SCHOOL
              </p>
              <h1 className="text-[60px] font-bold text-6xl">
                Special 50% Off
              </h1>
              <p className="text-4xl">for our student community</p>
              <p className="font-base text-[14px] font-basic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <div className="bg-purple-600 rounded-md">ESPACIO DE BOTONES</div>
            </div>
            <CircleDecoration
              width="340px"
              height="340px"
              className="-bottom-48 left-1/2 "
              color="bg-purple-300"
            />
            <PointsIcon
              className="bottom-10 left-1/2"
              orientation="horizontal"
              color="bg-purple-600"
            />
          </div>
          <div className="bg-gray-500 rounded-3xl flex flex-col justify-center items-center gap-4 text-white">
            <h1 className="text-5xl font-semibold">Best Seller</h1>
            <p className="text-base">Based sales this week</p>
            <div className="flex justify-center items-center gap-3">
              <ChevronLeftCircle />
              <div className="bg-gray-400 w-[200px] h-[290px] rounded-xl border-2 border-white shadow-lg shadow-cyan-500/50"></div>
              <ChevronRightCircle />
            </div>
            <p className="text-xl font-semibold flex flex-col items-center">
              Pushing Clouds{" "}
              <span className="text-xs font-thin font-basic opacity-60">
                ADVENTURE, SCIENCE, COMEDY
              </span>
            </p>
            <div className="bg-white px-6 py-3 text-lg font-semibold flex  gap-4 rounded-xl">
              <p className="text-gray-100 line-through">60.00</p>
              <p className="text-black">USD 45.25</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mb-[100px]">
          <Benefits
            benefit="Quick Delivery"
            description="Delivery dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            icon={<Zap className={iconClassName} />}
          />
          <Benefits
            benefit="Secure Payment"
            description="Payment dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            icon={<ThumbsUp className={iconClassName} />}
          />
          <Benefits
            benefit="Best Quality"
            description="Quality dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            icon={<ShieldCheck className={iconClassName} />}
          />
          <Benefits
            benefit="Return Guarantee"
            description="Guarantee dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            icon={<Star className={iconClassName} />}
          />
        </div>
        <div className="flex gap-8 mb-[100px]">
          <BooksRecomended
            title="Recomended For You"
            color="bg-orange-100"
            description="Recomended dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <CircleDecoration
              width="340px"
              height="340px"
              className="-top-1/2 -right-1/4"
              color="bg-orange-200"
            />
            <CircleDecoration
              width="215px"
              height="215px"
              className="-bottom-1/4 -left-10"
              color="bg-orange-300"
            />
            <PointsIcon
              className="top-10 right-10"
              orientation="horizontal"
              color="bg-orange-400"
            />
          </BooksRecomended>
          <BooksRecomended
            title="Popular in 2020"
            color="bg-blue-100"
            description="Popular dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <CircleDecoration
              width="240px"
              height="240px"
              className="-top-1/4 right-1/4"
              color="bg-blue-200"
            />
            <CircleDecoration
              width="450px"
              height="450px"
              className="-bottom-1/4 -left-1/4"
              color="bg-blue-200"
            />
            <PointsIcon
              className="top-1/4 right-10"
              orientation="vertical"
              color="bg-blue-300"
            />
          </BooksRecomended>
        </div>
        <div className="text-center">
          <div>
            <h2 className="text-[50px] font-semibold">Special Offers</h2>
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <SpecialsBooks />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
