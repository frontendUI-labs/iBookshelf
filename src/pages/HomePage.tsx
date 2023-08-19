// import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  Zap,
  ThumbsUp,
  ShieldCheck,
  Star,
  ShoppingCart,
  Bookmark,
  MoveRight,
  Users,
  BookOpen,
  Store,
  Feather,
  MoveLeft,
} from "lucide-react";
import Benefits from "../components/ui/BenefitsCard";
import { useState, type ReactNode, useEffect } from "react";
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
function MainCard() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      // autoplay={{
      //   delay: 2000,
      //   disableOnInteraction: true,
      //   pauseOnMouseEnter: true,
      // }}
      loop
      className="relative z-0 "
      slidesPerView={1}
      pagination={{
        clickable: true,
        horizontalClass: "hero-carousel-pagination",
      }}
    >
      {[
        {
          title: "Special 50% Off",
          img: "/images/firstImage.png",
        },
        {
          title: "Best Books",
          img: "/images/secondImage.png",
        },
        {
          title: "SEE ALL",
          img: "/images/thirdImage.png",
        },
      ].map((slide) => (
        <SwiperSlide key={slide.title} className="p-24">
          <div className={twMerge("flex flex-col gap-10 w-[480px] h-full")}>
            <img
              className="absolute z-2 right-12 bottom-0"
              src={slide.img}
              alt=""
            />
            <p className="text-purple-600 font-bold text-lg tracking-[4px]">
              BACK TO SCHOOL
            </p>
            <h1 className="text-[60px] font-bold text-6xl">{slide.title}</h1>
            <p className="text-4xl">for our student community</p>
            <p className="font-base text-[14px] font-basic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div className="bg-purple-600 rounded-md">ESPACIO DE BOTONES</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
function BestBook() {
  return (
    <div className="overflow-hidden font-heading bg-blue-100 rounded-3xl">
      <div className="h-full">
        <Swiper
          id="bestBook"
          className="h-full relative"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: true,
          //   pauseOnMouseEnter: true,
          // }}
          loop
          slidesPerView={1}
          slidesPerGroup={1}
          navigation={{
            nextEl: ".bestBook-nextEl",
            prevEl: ".bestBook-prevEl",
            disabledClass: "hidden",
          }}
        >
          {[
            {
              section: "Best Seller",
              title: "Pushing Clouds",
              tags: ["ADVENTURE", "SCIENCE", "COMEDY"],
              fixedPrice: "58.25",
              actualPrice: "60.00",
              bg: "bg-purple-600",
            },
            {
              section: "Best Reader",
              title: "cats",
              tags: ["ADVENTURE", "DRAMA", "COMEDY"],
              fixedPrice: "38.25",
              actualPrice: "40.00",
              bg: "bg-orange-400",
            },
          ].map((book) => (
            <SwiperSlide key={book.title}>
              <div
                className={twMerge(
                  "bg-gray-400 h-full rounded-xl border-4 border-white flex flex-col justify-center items-center gap-4",
                  book.bg
                )}
              >
                <h1 className="text-5xl font-semibold">{book.section}</h1>
                <p className="text-base">Based sales this week</p>
                <div className="bg-gray-400 w-[200px] h-[290px] rounded-xl border-2 border-white shadow-lg shadow-cyan-500/50"></div>
                <p className="text-xl font-semibold flex flex-col items-center">
                  {book.title}
                  <span className="text-xs font-thin font-basic opacity-60">
                    {book.tags.join(", ")}
                  </span>
                </p>
                <div className="bg-white px-6 py-3 text-lg font-semibold flex  gap-4 rounded-xl">
                  <p className="text-gray-100 line-through">
                    {book.actualPrice}
                  </p>
                  <p className="text-black">USD {book.fixedPrice}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button className="bestBook-prevEl absolute z-10 left-5 top-1/2 -translate-y-1/2">
            <ChevronLeftCircle className="fill-gray-500 text-white  w-9 h-9 " />
          </button>
          <button className="bestBook-nextEl absolute z-10 right-5 top-1/2 -translate-y-1/2 ">
            <ChevronRightCircle className="fill-gray-500 text-white w-9 h-9" />
          </button>
        </Swiper>
      </div>
    </div>
  );
}
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
      {children}
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
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: true,
          //   pauseOnMouseEnter: true,
          // }}
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
          className="relative overflow-visible"
          slidesPerView={4}
          slidesPerGroup={4}
          navigation={{
            nextEl: ".booksRecomended-nextEl",
            prevEl: ".booksRecomended-prevEl",
            disabledClass: "hidden",
          }}
        >
          {Array.from({ length: 12 }).map((_, id) => (
            <SwiperSlide key={id}>
              <div
                className={twMerge(
                  "bg-gray-400 h-[195px] rounded-xl border-4 border-white",
                  id > 6 ? "bg-purple-600" : "bg-orange-400"
                )}
              />
            </SwiperSlide>
          ))}
          <button className="booksRecomended-prevEl absolute z-10 -left-3 top-1/2 -translate-y-1/2">
            <ChevronLeftCircle className="fill-white w-12 h-12 " />
          </button>
          <button className="booksRecomended-nextEl absolute z-10 -right-3 top-1/2 -translate-y-1/2 ">
            <ChevronRightCircle className=" fill-white w-12 h-12" />
          </button>
        </Swiper>
      </div>
    </div>
  );
}
const SpecialsBooks = () => {
  return (
    <div>
      <Swiper
        id="specialsBook"
        className="grid grid-cols-3 h-full overflow-y-visible"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true,
        //   pauseOnMouseEnter: true,
        // }}
        loop
        spaceBetween={40}
        slidesPerView={3}
        navigation={{
          prevEl: ".specialBook-prevEl",
          nextEl: ".specialBook-nextEl",
          disabledClass: "hidden",
        }}
      >
        {[
          {
            title: "PRIMERO",
            tags: ["BIOGRAPHY"],
            author: "Margaretha Helew",
            actualPrice: "8.78",
            prevPrice: "15",
          },
          {
            title: "SECONDS [Part I]",
            tags: ["HORROR"],
            author: "Kevin Smiley",
            actualPrice: "18.78",
            prevPrice: "25",
          },
          {
            title: "Terrible Madness",
            tags: ["THRILLER"],
            author: "David Here",
            actualPrice: "28.78",
            prevPrice: "35",
          },
          {
            title: "REWORK",
            tags: ["BIOGRAPHY"],
            author: "Margaretha Helew",
            actualPrice: "8.78",
            prevPrice: "15",
          },
          {
            title: "NOTEBOOK",
            tags: ["BIOGRAPHY"],
            author: "Margaretha Helew",
            actualPrice: "8.78",
            prevPrice: "15",
          },
          {
            title: "ULTIMO",
            tags: ["BIOGRAPHY"],
            author: "Margaretha Helew",
            actualPrice: "8.78",
            prevPrice: "15",
          },
        ].map((card) => (
          <SwiperSlide key={card.title} className="">
            <div className="rounded-2xl border-2 border-gray-300 overflow-y-hidden boxShadow">
              <div className="h-[300px] w-full bg-gray-100 rounded-b-2xl"></div>
              <div className="text-start p-7">
                <h3 className="text-2xl font-semibold mb-5">{card.title}</h3>
                <div className="mb-4 flex gap-3">
                  {Array.from({ length: 3 }).map((_, id) => (
                    <button
                      key={id}
                      className="bg-purple-400 text-purple-600 text-xs
                      font-basic font-normal py-2 px-3 rounded-xl"
                    >
                      {card.tags}
                    </button>
                  ))}
                </div>
                <p className="text-base font-light font-basic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                <p className="text-base font-normal font-basic my-8">
                  {card.author}
                </p>
                <div className="flex justify-between">
                  <button className="bg-purple-600 py-3 px-12 rounded-xl flex gap-4 text-white">
                    <ShoppingCart />
                    <span className="text-lg font-semibold">Add to cart</span>
                  </button>
                  <p className="flex items-center gap-4">
                    <span className="text-3xl font-semibold">
                      $ {card.actualPrice}
                    </span>
                    <span className="text-xl font-normal text-gray-100 line-through">
                      $ {card.prevPrice}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <button className="specialBook-prevEl mr-2  absolute z-10 right-1/2 -bottom-20 w-[50px] h-[50px] rounded-full bg-purple-400 flex justify-center items-center">
          <MoveLeft className="text-purple-600 stroke-[3px]" />
        </button>
        <button className="specialBook-nextEl ml-2 absolute z-10 left-1/2 -bottom-20 w-[50px] h-[50px] rounded-full bg-purple-400 flex justify-center items-center">
          <MoveRight className="text-purple-600 stroke-[3px]" />
        </button>
      </Swiper>
    </div>
  );
};
const formatTime = (time: number) => {
  return time < 10 ? `0${time}` : time;
};
const Timer = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  const initialTimeInSeconds =
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  const [remainingTime, setRemainingTime] = useState(initialTimeInSeconds);

  useEffect(() => {
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime((previousRemainingTime) => previousRemainingTime - 1);
      }, 900);

      return () => {
        clearInterval(interval);
      };
    }
  }, [remainingTime]);

  const daysLeft = Math.floor(remainingTime / (24 * 60 * 60));
  const hoursLeft = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
  const minutesLeft = Math.floor((remainingTime % (60 * 60)) / 60);
  const secondsLeft = remainingTime % 60;

  return (
    <div className="border-2 border-gray-300 rounded-2xl px-10 py-3 flex gap-14 mb-16">
      <div className="flex flex-col gap-1">
        <span className="text-[50px] font-semibold text-orange-400">
          {formatTime(daysLeft)}
        </span>
        <span className="text-sm font-normal">Days</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[50px] font-semibold text-orange-400">
          {formatTime(hoursLeft)}
        </span>
        <span className="text-sm font-normal">Hours</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[50px] font-semibold text-orange-400">
          {formatTime(minutesLeft)}
        </span>
        <span className="text-sm font-normal">Minutes</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[50px] font-semibold text-orange-400">
          {formatTime(secondsLeft)}
        </span>
        <span className="text-sm font-normal">Seconds</span>
      </div>
    </div>
  );
};
const FlashBooks = ({
  title,
  gnre,
  priceActual,
  prevPrice,
}: {
  title: string;
  gnre: string;
  priceActual: string;
  prevPrice: string;
}) => {
  return (
    <div className="p-5 ">
      <div className="bg-gray-400 rounded-2xl w-[230px] h-[320px]"></div>
      <div className="flex flex-col gap-2 mt-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-sm font-normal text-purple-600">{gnre}</span>
        <div className="flex items-center justify-center gap-4">
          <span className="text-2xl text-purple-600 font-semibold">
            $ {priceActual}
          </span>
          <span className="text-xl font-normal text-gray-500 line-through">
            $ {prevPrice}
          </span>
        </div>
      </div>
    </div>
  );
};
const TestimonialCard = () => {
  return (
    <>
      <Swiper
        id="user"
        className="grid grid-cols-3 h-full overflow-y-visible"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop
        spaceBetween={30}
        slidesPerView={3}
      >
        {[
          {
            title:
              "FIRST Title. Shoping book in Bookoe is very easy. Quick delivery and fast respon.",
            user: "Steve JAJA",
          },
          {
            title:
              "Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!",
            user: "Steve Henry",
          },
          {
            title:
              "I never know this shop before, until my grandma tell me how excelent this book store",
            user: "Miranda Lee",
          },
          {
            title:
              "asdasfas.Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!",
            user: "Steve Henry",
          },
          {
            title:
              "124214123;Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!",
            user: "Steve Henry",
          },
          {
            title:
              "LAST Title. Shoping book in Bookoe is very easy. Quick delivery and fast respon.",
            user: "Steve JOJO",
          },
        ].map((card) => (
          <SwiperSlide key={card.title}>
            <div className="text-center px-10 py-8 rounded-xl font-basic border-2 border-gray-300 boxShadow">
              <h3 className="text-xl font-medium mb-8">{card.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex gap-5">
                  <div className="w-[50px] h-[50px] rounded-full bg-gray-100 flex justify-center items-center"></div>
                  <div className="text-start">
                    <h4 className="text-base font-semibold">{card.user}</h4>
                    <span className="text-xs font-normal">Book Lovers</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, id) => (
                    <Star
                      key={id}
                      className="fill-orange-600 text-orange-600"
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
const NewsBook = ({
  title,
  user,
  date,
}: {
  title: string;
  user: string;
  date: string;
}) => {
  return (
    <div className="rounded-2xl border-2 border-gray-300 overflow-hidden">
      <div className="h-[250px] bg-gray-100 rounded-b-2xl"></div>
      <div className="text-start py-7 flex flex-col gap-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="text-sm font-light font-basic mb-5">
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore...
          </p>
          <a className="text-purple-600" href="">
            Continue reading
          </a>
        </div>
        <div className="flex gap-5">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-100 flex justify-center items-center"></div>
          <div className="text-start text-sm flex flex-col justify-between">
            <h4 className="font-semibold">{user}</h4>
            <span className="font-norma text-gray-100">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const SectionsBooks = ({
  section,
  quantity,
  icon,
}: {
  section: string;
  quantity: string;
  icon: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div>{icon}</div>
      <h2 className="text-[48px] font-bold mb-[10px] mt-10">{quantity}</h2>
      <span className="text-xl font-medium text-gray-100">{section}</span>
    </div>
  );
};

function Home() {
  const iconClassName = "text-purple-600 fill-purple-600 w-[25px] h-[25px]";
  const iconSectionClass =
    "w-[100px] h-[100px] fill-purple-600 text-white stroke-[0.75px]";
  return (
    <>
      <div className="my-[30px] font-heading flex flex-col gap-[100px]">
        <div className="main grid grid-cols-[3fr,1fr] gap-x-3 h-[662px] container mx-auto">
          <div className="relative bg-purple-400 rounded-3xl overflow-hidden">
            <MainCard />
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
          <BestBook />
        </div>
        <div className="benefits flex flex-wrap justify-between container mx-auto">
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
        <div className="recomended flex gap-8 container mx-auto">
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
        <div className="special container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-[50px] font-semibold mb-4">Special Offers</h2>
            <p className="text-base font-light">
              Lorem ipsumz dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <SpecialsBooks />
        </div>
        <div className="flashSale text-center flex flex-col items-center container mx-auto py-[70px]">
          <div className="relative mb-16">
            <PointsIcon
              color="bg-purple-400"
              orientation="vertical"
              className="-top-1/4 left-1/2 translate-x-20 -z-10"
            />
            <h2 className=" text-[50px] font-semibold mb-4 z-10">Flash Sale</h2>
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Timer days={2} hours={5} minutes={42} seconds={19} />
          <div className="flex gap-8 mb-[100px]">
            <FlashBooks
              title="SECONDS"
              gnre="THRILLER"
              priceActual="54.78"
              prevPrice="70.00"
            />
            <FlashBooks
              title="REWORK"
              gnre="DRAMA , BIOGRAPHY"
              priceActual="34.56"
              prevPrice="50.00"
            />
            <FlashBooks
              title="Such a Fun Age"
              gnre="THRILLER"
              priceActual="14.56"
              prevPrice="20.00"
            />
            <FlashBooks
              title="Emily and The Back.."
              gnre="DRAMA , BIOGRAPHY"
              priceActual="76.12"
              prevPrice="90.00"
            />
            <FlashBooks
              title="Battle Drive"
              gnre="DRAMA , BIOGRAPHY"
              priceActual="76.12"
              prevPrice="90.00"
            />
          </div>
        </div>
        <div className="feature w-full h-[800px] bg-purple-400 relative overflow-hidden px-[130px] py-[70px]">
          <CircleDecoration
            color="bg-purple-100"
            width="450px"
            height="450px"
            className="-bottom-1/4 -left-60"
          />
          <CircleDecoration
            color="bg-purple-300"
            width="580px"
            height="580px"
            className="-top-1/4 -right-40"
          />
          <PointsIcon
            color="bg-[#CABCFF]"
            orientation="vertical"
            className="top-10 left-10"
          />
          <PointsIcon
            color="bg-[#CABCFF]"
            orientation="horizontal"
            className="bottom-10 right-16"
          />
          <div className="relative flex justify-between gap-16">
            <div className="w-1/2">
              <div className="mb-14 mt-3">
                <h2 className="text-[50px] font-semibold">Featured Books</h2>
                <p className="text-base font-basic font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                  <br />
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
              <div className="h-[480px] bg-white p-8 rounded-xl grid grid-cols-[0.9fr,1.1fr] gap-10 boxShadow">
                <div className="bg-gray-100 rounded-2xl"></div>
                <div className="text-start flex flex-col justify-between">
                  <div className="flex gap-4">
                    <div className="relative">
                      <Bookmark className="text-purple-600 w-[70px] h-[70px]" />
                      <Star className="fill-orange-400 text-white absolute -top-3 -right-[6px] w-[42px] h-[42px]" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-semibold">Battle Drive</h3>
                      <span className="text-base font-medium text-purple-600">
                        SPORTS, DRAMA
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3">Synopsis</h4>
                    <p className="text-sm font-basic font-light">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="flex gap-12">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-normal text-gray-100">
                        Writen by
                      </span>
                      <span className="text-lg font-medium">Kevin Smiley</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-normal text-gray-100">
                        Year
                      </span>
                      <span className="text-lg font-medium">2019</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-semibold">$ 84.78</span>
                      <span className="text-xl font-normal text-gray-400 line-through">
                        $90.00
                      </span>
                    </div>
                    <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-600 text-white text-lg font-semibold">
                      <ShoppingCart />
                      <span>ADD</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 grid grid-cols-3 gap-9">
              {Array.from({ length: 6 }).map((_, id) => (
                <div key={id} className="bg-gray-100 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
        <div className="testimonials text-center flex flex-col items-center py-[50px]">
          <div className="mb-8">
            <h2 className="text-[50px] font-semibold mb-4">Testimonials</h2>
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex mb-16">
            {Array.from({ length: 4 }).map((_, id) => (
              <div
                key={id}
                className={twMerge(
                  "w-[58px] h-[58px] rounded-full bg-gray-100 border-4 border-white",
                  id > 0 && `-ml-4`
                )}
              />
            ))}
            <div className="w-[58px] h-[58px] rounded-full bg-purple-600 border-4 border-white -ml-4 flex justify-center items-center">
              <span className="poppins text-base font-semibold text-white">
                21k+
              </span>
            </div>
          </div>
          <div className="flex gap-8">
            <TestimonialCard />
          </div>
        </div>
        <div className="latest flex flex-col text-start container mx-auto py-[50px]">
          <div className="flex justify-between items-end mb-20">
            <div className="flex flex-col justify-between">
              <h2 className="text-[50px] font-semibold mb-5">Letest News</h2>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua
              </p>
            </div>
            <button className="boxShadow bg-purple-600 px-6 py-3 rounded-xl text-white text-lg font-medium flex items-center gap-10">
              <span>View more</span>
              <MoveRight />
            </button>
          </div>
          <div className="flex gap-10">
            <NewsBook
              title="Why reading is important for our children?"
              user="Lidya Humble"
              date="2 days ago"
            />
            <NewsBook
              title="Benefits of reading: Smart, Diligent, Happy"
              user="Steffanny William"
              date="5 August 2020"
            />
            <NewsBook
              title="What books you should read in 2020?"
              user="James Wong"
              date="3 August 2020"
            />
            <NewsBook
              title="10 Things you must know to improve your reading skills"
              user="Franklin Junior"
              date="1 August 2020"
            />
          </div>
        </div>
        <div className="section container mx-auto py-[20px]">
          <div className="flex justify-between px-[150px] ">
            <SectionsBooks
              section="Happy Customers"
              quantity="125,663"
              icon={<Users className={iconSectionClass} />}
            />
            <SectionsBooks
              section="Book Collections"
              quantity="50,672+"
              icon={<BookOpen className={iconSectionClass} />}
            />
            <SectionsBooks
              section="Our Stores"
              quantity="1,562"
              icon={<Store className={iconSectionClass} />}
            />
            <SectionsBooks
              section="Famous Writers"
              quantity="457"
              icon={<Feather className={iconSectionClass} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
