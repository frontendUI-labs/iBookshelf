import { twMerge } from "tailwind-merge";
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  Star,
  Bookmark,
  MoveRight,
  Users,
  BookOpen,
  Store,
  Feather,
  MoveLeft,
} from "lucide-react";
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
import CartButton from "../components/ui/CartButton";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import {
  useGetBooksRecomended,
  useGetBooksPopular,
  useGetBooksOnDiscount,
  useGetBooksFlashDiscount,
  useGetBooksFeature,
} from "../hooks/books";
import ContainerBenefits from "../components/ui/BenefitsCard";
import { Book } from "../types/book";
import OnSaleBook from "../components/ui/OnSaleBook";

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
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },

        1024: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 100,
        },
      }}
      loop
      className="relative z-10 overflow-y-visible"
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
          description: `"Unlock Knowledge and Adventure with 50% OFF Books! Limited time offer to expand your horizons for less."`,
        },
        {
          title: "Best Books",
          img: "/images/secondImage.png",
          description: `"Discover the Best Books: A curated collection of must-reads that captivate, educate, and inspire."`,
        },
        {
          title: "Read our all Books",
          img: "/images/thirdImage.png",
          description: `"Explore a World of Books: Our diverse collection caters to every taste and interest, promising captivating reads for all."`,
        },
      ].map((slide) => (
        <SwiperSlide key={slide.title}>
          <div className="relative z-20 flex flex-col gap-4 lg:gap-8">
            <p className="text-purple-600 text-base font-bold lg:text-lg tracking-[4px]">
              BACK TO SCHOOL
            </p>
            <h1 className="text-[35px] xl:text-[60px] font-bold text-6xl">
              {slide.title}
            </h1>
            <p className="text-2xl italic md:text-4xl">for our community</p>
            <p className="font-basic text-base font-base w-2/3 md:text-base lg:w-1/2">
              {slide.description}
            </p>
            <div className="sm:w-1/2 2xl:w-4/12">
              <Button className="w-2/3 flex justify-around">
                <span>Get the deal</span>
                <MoveRight />
              </Button>
              <Button variant="ternary" className="w-2/3">
                See other promos
              </Button>
            </div>
          </div>
          <img
            className={twMerge(
              "absolute bottom-10 right-0 md:left-1/2 lg:right-0 2xl:bottom-0",
              slide.img === "/images/firstImage.png"
                ? "w-[350px] h-[350px] -right-14 2xl:w-[500px] 2xl:h-[500px] "
                : "w-[200px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] "
            )}
            src={slide.img}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
function BestBook() {
  const { booksPopular } = useGetBooksPopular();
  const moreRating = booksPopular.map((book) => book.rating);
  const maxRating = Math.max(...moreRating);
  const newPopularBook = [...booksPopular];
  const mostPopular = newPopularBook.filter(
    (book) => book.rating === maxRating
  );
  const Categories = ["Most Popular", "Best Seller", "Best Reader"];
  return (
    <div className="font-heading">
      <Swiper
        id="bestBook"
        className="relative"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop
        slidesPerView={1}
        navigation={{
          nextEl: ".bestBook-nextEl",
          prevEl: ".bestBook-prevEl",
        }}
      >
        {mostPopular.map((book, idx) => {
          return (
            <SwiperSlide key={book.title}>
              <div
                className={twMerge(
                  "text-white flex flex-col justify-center items-center gap-4"
                )}
              >
                <img
                  className="blur-md object-[cover] absolute left-0 top-0 w-full h-full"
                  src={book.cover}
                  alt="cover"
                />
                <div className="relative z-10 py-4 flex flex-col justify-center items-center gap-1 md:gap-4">
                  <div>
                    <h1 className="text-center text-3xl font-semibold 2xl:text-5xl">
                      {Categories[idx]}
                    </h1>
                  </div>
                  <p className="text-base">Based sales this week</p>
                  <img
                    src={book.cover}
                    className={twMerge(
                      " w-[200px] h-[290px] rounded-xl border-2 border-white boxShadow"
                    )}
                    alt=""
                  />
                  <div className="flex flex-col text-center font-semibold 2xl:text-xl">
                    <Link to={`/details/${book.slug}`}>
                      <p className="line-clamp-1 px-4 hover:text-blue-400 ">
                        {book.title}
                      </p>
                    </Link>
                    <Link to={`/filter/${book.categorySlug}`}>
                      <span className="uppercase text-xs font-thin font-basic opacity-60 hover:font-bold">
                        {book.categorySlug}
                      </span>
                    </Link>
                  </div>
                  <div className="bg-white px-6 py-3 text-lg font-semibold flex  gap-4 rounded-xl">
                    <p className="text-gray-100 line-through">{book.price}</p>
                    <p className="text-black">
                      USD{" "}
                      {(
                        book.price -
                        book.price * book.discountPercentage
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <button className="bestBook-prevEl absolute z-10 left-5 top-1/2 -translate-y-1/2 ">
          <ChevronLeftCircle className="fill-gray-500 text-white  w-9 h-9 hover:text-purple-700" />
        </button>
        <button className="bestBook-nextEl absolute z-10 right-5 top-1/2 -translate-y-1/2 ">
          <ChevronRightCircle className="fill-gray-500 text-white w-9 h-9 hover:text-purple-700" />
        </button>
      </Swiper>
    </div>
  );
}
function BooksRecomended() {
  const { booksRecomended } = useGetBooksRecomended();

  return (
    <div className="relative h-full overflow-hidden mb-10 bg-orange-100 py-6 px-10 font-heading  rounded-3xl flex flex-col justify-around gap-3 md:py-10 md:gap-8 lg:px-[70px]  xl:w-1/2 2xl:justify-between">
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
        color="bg-orange-400 opacity-40"
      />
      <div className="md:w-9/12 2xl:w-11/12">
        <h3 className="text-2xl mb-2 md:text-4xl font-semibold md:mb-8 relative">
          Recomended For You
        </h3>
        <p className="relative text-sm  font-basic font-light ">
          Discover personalized recommendations just for you. Our 'Recommended
          for You' section tailors book suggestions based on your preferences,
          ensuring you find your next great read effortlessly.
        </p>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 2,
              spaceBetween: 18,
            },
          }}
          className="relative overflow-visible"
          slidesPerView={4}
          slidesPerGroup={2}
          navigation={{
            nextEl: ".booksRecomended-nextEl",
            prevEl: ".booksRecomended-prevEl",
            // disabledClass: "hidden",
          }}
        >
          {booksRecomended.map((book) => {
            return (
              <SwiperSlide
                key={book.cover}
                className="flex items-center justify-center sm:justify-start"
              >
                <Link to={`/details/${book.slug}`}>
                  <img
                    className="w-[200px] aspect-[4/5] object-cover rounded-xl border-[3px] border-orange-300 2xl:aspect-[3/4]"
                    src={book.cover}
                    alt=""
                  />
                </Link>
              </SwiperSlide>
            );
          })}
          <button className="booksRecomended-prevEl absolute z-10 -left-3 top-1/2 -translate-y-1/2 sm:-left-5 lg:-left-12">
            <ChevronLeftCircle className="fill-white w-12 h-12 hover:text-orange-600" />
          </button>
          <button className="booksRecomended-nextEl absolute z-10 -right-3 top-1/2 -translate-y-1/2 sm:right-3 md:-right-5 lg:right-2 xl:-right-12">
            <ChevronRightCircle className=" fill-white w-12 h-12 hover:text-orange-600" />
          </button>
        </Swiper>
      </div>
    </div>
  );
}
function BooksPopular() {
  const { booksPopular } = useGetBooksPopular();
  return (
    <div className="relative h-full overflow-hidden mb-10 bg-blue-100 py-6 px-10 font-heading  rounded-3xl flex flex-col justify-around gap-3 md:py-10 md:gap-8 lg:px-[70px]  xl:w-1/2 2xl:justify-between">
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
      <div>
        <h3 className="text-2xl mb-2 md:text-4xl font-semibold md:mb-8 relative">
          Popular in 2023
        </h3>
        <p className="relative text-sm md:w-9/12 font-basic font-light 2xl:w-11/12">
          Stay up to date with the literary trends of 2023! Explore our 'Popular
          in 2023 For You' .Immerse yourself in the stories that have captured
          the hearts and minds of readers worldwide.
        </p>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 2,
              spaceBetween: 18,
            },
          }}
          className="relative overflow-visible"
          slidesPerView={4}
          slidesPerGroup={2}
          navigation={{
            nextEl: ".booksRecomended-nextEl",
            prevEl: ".booksRecomended-prevEl",
            // disabledClass: "hidden",
          }}
        >
          {booksPopular.map((book) => {
            return (
              <SwiperSlide
                key={book.cover}
                className="flex items-center justify-center sm:justify-start"
              >
                <Link to={`/details/${book.slug}`}>
                  <img
                    className="w-[200px] aspect-[4/5] object-cover rounded-xl border-[3px] border-blue-300 2xl:aspect-[3/4]"
                    src={book.cover}
                    alt=""
                  />
                </Link>
              </SwiperSlide>
            );
          })}
          <button className="booksRecomended-prevEl absolute z-10 -left-3 top-1/2 -translate-y-1/2 sm:-left-5 lg:-left-12">
            <ChevronLeftCircle className="fill-white w-12 h-12 hover:text-orange-600" />
          </button>
          <button className="booksRecomended-nextEl absolute z-10 -right-3 top-1/2 -translate-y-1/2 sm:right-3 md:-right-5 lg:right-2 xl:-right-12">
            <ChevronRightCircle className=" fill-white w-12 h-12 hover:text-orange-600" />
          </button>
        </Swiper>
      </div>
    </div>
  );
}
const TitleOfEachSection = ({
  title,
  description,
  position,
}: {
  title: string;
  description: string;
  position?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col text-center gap-4 mb-8", position)}>
      <h2 className="text-3xl md:text-4xl md:text-[50px] font-semibold">
        {title}
      </h2>
      <p className="text-sm font-basic font-light md:text-base">
        {description}
      </p>
    </div>
  );
};
const SpecialsBooks = () => {
  const { booksDiscount } = useGetBooksOnDiscount();
  return (
    <div>
      <Swiper
        id="specialsBook"
        className="grid grid-cols-3 h-full overflow-y-visible"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 30,
          },
        }}
        slidesPerView={3}
        navigation={{
          prevEl: ".specialBook-prevEl",
          nextEl: ".specialBook-nextEl",
          // disabledClass: "hidden",
        }}
      >
        {booksDiscount.map((book) => (
          <SwiperSlide key={book.title}>
            <div className="rounded-2xl border-2 border-gray-300 overflow-y-hidden boxShadow">
              <Link to={`/details/${book.slug}`}>
                <img
                  className="h-[200px] w-full object-cover rounded-b-2xl md:h-[300px]"
                  src={book.cover}
                  alt=""
                />
              </Link>
              <div className="text-start p-3 md:p-7 flex flex-col justify-between">
                <Link to={`/details/${book.slug}`}>
                  <h3 className="line-clamp-1 font-semibold mb-3 md:text-2xl md:mb-5 hover:text-purple-600">
                    {book.title}
                  </h3>
                </Link>
                <div>
                  <Link to={`/filter/${book.categorySlug}`}>
                    <div className="uppercase tracking-wider bg-purple-400 inline-block text-purple-600 text-xs font-basic font-normal py-2 px-3 rounded-xl hover:text-orange-400 hover:bg-orange-200 ">
                      {book.categorySlug}
                    </div>
                  </Link>
                </div>
                <p className="line-clamp-4 text-xs mt-4 font-light font-basic md:text-base">
                  {book.synopsis}
                </p>
                <p className="my-3 text-sm font-normal font-basic md:my-8 md:text-base">
                  {book.author}
                </p>
                <div className="flex flex-col-reverse gap-2 md:flex justify-between">
                  <div>
                    <CartButton text="Add to cart" />
                  </div>
                  <p className="flex items-center gap-4">
                    <span className="text-xl font-semibold md:text-3xl">
                      $
                      {(
                        book.price -
                        book.price * book.discountPercentage
                      ).toFixed(2)}
                    </span>
                    <span className="text-base font-normal text-gray-100 line-through md:text-xl">
                      $ {book.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <button className="specialBook-prevEl mr-2  absolute z-10 right-1/2 -bottom-20 w-[50px] h-[50px] rounded-full bg-purple-400 flex justify-center items-center hover:bg-purple-200">
          <MoveLeft className="text-purple-600 stroke-[3px]" />
        </button>
        <button className="specialBook-nextEl ml-2 absolute z-10 left-1/2 -bottom-20 w-[50px] h-[50px] rounded-full bg-purple-400 flex justify-center items-center hover:bg-purple-200">
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
    if (remainingTime <= 0) return;

    const interval = setInterval(() => {
      setRemainingTime((previousRemainingTime) => previousRemainingTime - 1);
    }, 900);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);

  const daysLeft = Math.floor(remainingTime / (24 * 60 * 60));
  const hoursLeft = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
  const minutesLeft = Math.floor((remainingTime % (60 * 60)) / 60);
  const secondsLeft = remainingTime % 60;

  return (
    <div className="w-full border-2 border-gray-300 py-3 mb-8 rounded-2xl flex justify-around items-center sm:w-2/3 md:gap-14 md:px-10 lg:w-1/2 2xl:mb-16 2xl:w-4/12">
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
const FlashBooks = () => {
  const { bookFlashDiscount } = useGetBooksFlashDiscount();
  return (
    <>
      {bookFlashDiscount.map((book) => (
        <div
          key={book.title}
          className="p-5 flex flex-col items-center gap-4 md:h-[500px] md:aspect-[3/4]"
        >
          <Link to={`/details/${book.slug}`}>
            <img
              className="border-[0.5px] border-orange-600 rounded-2xl h-[330px] aspect-[3/4] hover:scale-105 duration-300"
              src={book.cover}
              alt="cover"
            />
          </Link>
          <div className="flex flex-col items-center md:gap-2 md:mt-3">
            <Link
              to={`/details/${book.slug}`}
              className="hover:text-purple-600"
            >
              <h3 className="text-xl font-semibold line-clamp-2 md:px-10">
                {book.title}
              </h3>
            </Link>
            <Link to={`/filter/${book.categorySlug}`}>
              <span className="uppercase tracking-wide text-sm font-normal text-purple-600 hover:text-orange-400">
                {book.categorySlug}
              </span>
            </Link>
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl text-purple-600 font-semibold">
                ${" "}
                {(book.price - book.price * book.discountPercentage).toFixed(2)}
              </span>
              <span className="text-base font-normal text-gray-500 line-through md:text-xl">
                $ {book.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
const FeatureBooks = () => {
  const { isSuccess, booksFeature } = useGetBooksFeature();
  const [selectedBook, setSelectedBook] = useState<Book>();
  console.log(booksFeature);

  useEffect(() => {
    if (isSuccess) {
      setSelectedBook(booksFeature[0]);
    }
  }, [booksFeature]);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <div className="xl:w-1/2">
        <div className="lg:w-1/2 xl:w-10/12">
          <TitleOfEachSection
            position="text-start"
            title=" Featured Books"
            description="Discover our Featured Books collection – handpicked titles that promise exceptional reads. Explore captivating stories and more in this curated selection of must-reads."
          />
        </div>
        {selectedBook && (
          <div className="p-2 bg-white rounded-xl md:grid grid-cols-[0.9fr,1.1fr] md:p-8 gap-6 boxShadow xl:h-[480px] ">
            <Link to={`/details/${selectedBook.slug}`}>
              <img
                className="w-full object-cover h-[300px] aspect-[4/5] rounded-2xl hover:scale-105 duration-300 md:h-auto bg-gray-100 lg:h-full "
                src={selectedBook.cover}
                alt="cover"
              />
            </Link>
            <div className="pt-3 px-2 text-start flex flex-col gap-1 justify-between">
              <div className="flex gap-4">
                <div className="relative">
                  <Bookmark className="text-purple-600 w-[70px] h-[70px]" />
                  <Star className="fill-orange-400 text-white absolute -top-3 -right-[6px] w-[42px] h-[42px]" />
                </div>
                <div>
                  <Link to={`/details/${selectedBook.slug}`}>
                    <h3 className="line-clamp-2 text-2xl font-semibold hover:text-purple-600 md:text-3xl">
                      {selectedBook.title}
                    </h3>
                  </Link>
                  <Link to={`/details/${selectedBook.categorySlug}`}>
                    <span className="uppercase text-sm font-medium text-purple-600 hover:text-orange-400 md:text-base">
                      {selectedBook.categorySlug}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mb-2 md:mb-0">
                <h4 className="text-lg font-medium mb-3">Synopsis</h4>
                <p className="line-clamp-4 text-xs font-basic font-light md:text-sm">
                  {selectedBook.synopsis}
                </p>
              </div>
              <div className="flex gap-12">
                <div className="flex flex-col md:gap-2">
                  <span className="text-xs font-normal text-gray-100 md:text-sm">
                    Writen by
                  </span>
                  <span className="text-sm font-medium md:text-lg ">
                    {selectedBook.author}
                  </span>
                </div>
                <div className="flex flex-col md:gap-2">
                  <span className="text-xs font-normal text-gray-100 md:text-sm">
                    Year
                  </span>
                  <span className="text-sm font-medium md:text-lg ">
                    {new Date(selectedBook.publishDate).getFullYear()}
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center justify-center gap-2 2xl:gap-4">
                  <span className="text-xl font-semibold md:text-2xl 2xl:text-3xl">
                    ${" "}
                    {(
                      selectedBook.price -
                      selectedBook.price * selectedBook.discountPercentage
                    ).toFixed(2)}
                  </span>
                  <span className="text-sm font-normal text-gray-400 line-through md:text-base 2xl:text-2xl">
                    ${selectedBook.price}
                  </span>
                </div>
                <CartButton text="ADD" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 xl:w-1/2 md:grid-cols-3 gap-9">
        {[
          booksFeature.map((book) => {
            return (
              <button
                className="hover:scale-105 duration-300"
                key={book.title}
                onClick={() => handleBookClick(book)}
              >
                <img
                  key={book.cover}
                  className="h-full  aspect-[3/4] rounded-xl object-cover"
                  src={book.cover}
                  alt="cover"
                />
              </button>
            );
          }),
        ]}
      </div>
    </>
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
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 30,
          },
        }}
      >
        {[
          {
            title:
              "FIRST Title. Shoping book in Bookoe is very easy. Quick delivery and fast respon.",
            user: "Steve Aoki",
            profile:
              "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
          },
          {
            title:
              "Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!",
            user: "Henry Spencer",
            profile:
              "https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png",
          },
          {
            title:
              "I never know this shop before, until my grandma tell me how excelent this book store",
            user: "Miranda Lee",
            profile:
              "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
          },
          {
            title:
              "asdasfas.Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!",
            user: "Alan Brito",
            profile:
              "https://www.eclipsegroup.co.uk/wp-content/uploads/2020/03/Round-Profile-Picture-768x768-1.png",
          },
          {
            title:
              "124214123;Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!",
            user: "Xina Lee",
            profile: "https://image.pngaaa.com/877/4877877-middle.png",
          },
          {
            title:
              "LAST Title. Shoping book in Bookoe is very easy. Quick delivery and fast respon.",
            user: "Ronda Rousey",
            profile:
              "https://www.kindpng.com/picc/m/442-4426528_round-picture-profile-blond-hd-png-download.png",
          },
        ].map((card) => (
          <SwiperSlide key={card.title}>
            <div className="text-center p-6 flex flex-col justify-between rounded-xl font-basic border-2 border-gray-300 boxShadow lgpx-10 md:py-8">
              <h3 className="line-clamp-2 text-base font-medium mb-8 lg:text-xl">
                {card.title}
              </h3>
              <div className="flex flex-col gap-3 items-center justify-between md:flex-row">
                <div className="flex items-center gap-5">
                  <img
                    className="w-[60px] h-[60px] rounded-full object-cover"
                    src={card.profile}
                    alt="user"
                  />
                  <div className="text-start">
                    <h4 className="text-sm font-semibold 2xl:text-base ">
                      {card.user}
                    </h4>
                    <span className="text-xs font-normal">Book Lovers</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, id) => (
                    <Star
                      key={id}
                      className="fill-orange-600 text-orange-600 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6"
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
const NewsBlogs = ({
  title,
  user,
  date,
  img,
  link,
  profile,
  description,
}: {
  title: string;
  user: string;
  date: string;
  img: string;
  link: string;
  profile: string;
  description: string;
}) => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <a href={link} target="_blank">
        <img
          className="h-[250px] bg-gray-100 rounded-b-2xl w-full object-cover hover:scale-105 duration-300"
          src={img}
          alt="cover"
        />
      </a>

      <div className="text-start py-3 flex flex-col gap-4 md:py-7">
        <a href={link} target="_blank">
          <h3 className="text-lg font-medium flex hover:text-purple-600">
            {title}
          </h3>
        </a>
        <div className="text-sm font-light font-basic md:mb-5">
          <p className="mb-2 line-clamp-3">{description}</p>
          <a className="text-purple-600" href={link} target="_blank">
            Continue reading...
          </a>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="w-[60px] h-[60px] rounded-full bg-gray-100 object-cover"
            src={profile}
            alt="user"
          />
          <div className="text-start text-sm flex flex-col gap-1">
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
    <div className="text-center flex flex-col items-center">
      <div className="">{icon}</div>
      <h2 className="text-3xl font-bold md:mb-[10px] md:mt-10 md:text-5xl">
        {quantity}
      </h2>
      <span className="text-base font-medium text-gray-100 md:text-xl">
        {section}
      </span>
    </div>
  );
};

function Home() {
  const iconSectionClass =
    "w-[70px] h-[70px] md:w-[100px] md:h-[100px] fill-purple-600 text-white stroke-[0.75px]";
  return (
    <>
      <div className="my-[30px] mx-auto font-heading flex flex-col gap-[100px] sm:px-0">
        <div className="main container mx-auto px-4 lg:px-14">
          <div className="flex flex-col gap-4 lg:grid grid-cols-[2fr,1fr] 2xl:grid-cols-[3fr,1fr] gap-x-3">
            <div className="relative flex pl-6 py-16 items-center justify-center bg-purple-400 rounded-3xl overflow-hidden lg:pl-10 lg:py-12">
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
                color="bg-orange-400 opacity-60"
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
            <div className="overflow-hidden rounded-3xl sm:w-1/2 sm:self-center lg:w-full ">
              <BestBook />
            </div>
          </div>
        </div>
        <div className="benefits">
          <ContainerBenefits />
        </div>
        <div className="recomended container mx-auto px-4 lg:px-14 xl:flex gap-4 2xl:mt-20">
          <BooksRecomended />
          <BooksPopular />
        </div>
        <div className="special container mx-auto px-4 lg:px-14 lg:mt-10 2xl:mt-20">
          <div className="mb-8 lg:mb-16 xl:px-60 2xl:px-96">
            <TitleOfEachSection
              title="Special Offers"
              description="Dive into our 'Special Offers' section and unlock a world of unbeatable book deals. Grab discounts and promotions on a diverse range of books."
            />
          </div>
          <SpecialsBooks />
        </div>
        <div className="flashSale container mx-auto px-4  py-[70px] text-center flex flex-col items-center  md:mt-20 lg:px-14">
          <div className="relative md:mb-8 2xl:mb-16 xl:px-60 2xl:px-96">
            <PointsIcon
              color="bg-purple-400"
              orientation="vertical"
              className="-top-1/4 left-1/2 translate-x-20 -z-10"
            />
            <TitleOfEachSection
              title="Flash Sale"
              description="Explore high-quality books at incredible prices in our Flash Sale section. These deals are for a limited time only, so act fast and discover your next read at the best price."
            />
          </div>
          <Timer days={2} hours={5} minutes={42} seconds={19} />
          <div className="flex flex-col md:flex-row md:mb-[50px]">
            <FlashBooks />
          </div>
        </div>
        <div className="onsale container mx-auto px-4 lg:px-14">
          <OnSaleBook />
        </div>
        <div className="feature w-full bg-purple-400 relative overflow-hidden py-[70px] xl:h-[800px]">
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
          <div className="container mx-auto px-4 relative flex flex-col gap-16  lg:px-14 xl:flex-row justify-between ">
            <FeatureBooks />
          </div>
        </div>
        <div className="testimonials text-center flex flex-col items-center md:py-[50px]">
          <TitleOfEachSection
            title="Testimonials"
            description="Read  testimonials that highlight the satisfaction and joy our books bring to readers like you."
          />
          <div className="flex mb-16">
            {Array.from({ length: 4 }).map((_, id) => (
              <img
                key={id}
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="user"
                className={twMerge(
                  " w-[38px] h-[38px] rounded-full bg-red-100 border-4 border-white object-cover md:w-[58px] md:h-[58px]",
                  id > 0 && `-ml-4`
                )}
              />
            ))}
            <div className="w-[38px] h-[38px] rounded-full bg-purple-600 border-4 border-white -ml-4 flex justify-center items-center md:w-[58px] md:h-[58px]">
              <span className="poppins text-xs font-semibold text-white md:text-base">
                21k+
              </span>
            </div>
          </div>
          <div className="flex gap-8">
            <TestimonialCard />
          </div>
        </div>
        <div className="latest container mx-auto flex flex-col text-start px-4  md:py-[50px] lg:px-14">
          <div className="flex justify-between items-end mb-10 lg:mb-10 lg:w-4/6 ">
            <TitleOfEachSection
              title="Letest News"
              position="text-start"
              description="Explore the Latest News section for the freshest updates in the world of books. Stay in the know with our articles on new releases, author interviews, and literary events."
            />
            {/* <button className="boxShadow bg-purple-600 px-6 py-3 rounded-xl text-white text-lg font-medium flex items-center gap-10">
              <span>View more</span>
              <MoveRight />
            </button> */}
          </div>
          <div className="flex flex-col mx-auto gap-16 md:grid grid-cols-2 md:gap-8 lg:gap-16 xl:grid-cols-4 xl:gap-5">
            <NewsBlogs
              title="Why reading is important for our children?"
              user="Lidya Humble"
              date="2 days ago"
              profile="https://www.dell.org/wp-content/uploads/2022/01/KatieW.png"
              link="https://www.highspeedtraining.co.uk/hub/why-is-reading-important-for-children/"
              img="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2019/05/importance-of-reading-for-children-twit-1.jpg"
              description="Reading allows us to be transported from our own world to another. Between the pages of a book, we can become immersed in the lives of fictional characters and learn about a culture entirely different from our own."
            />
            <NewsBlogs
              title="Benefits of reading: Smart, Diligent, Happy"
              user="Steffanny William"
              date="5 August 2020"
              profile="https://www.pngfind.com/pngs/m/443-4433119_circle-crop-profile-profile-picture-woman-circle-hd.png"
              link="https://www.meaningfulliving.ca/new-blog/2021/7/7/11-senior-reading-benefits"
              img="https://images.squarespace-cdn.com/content/v1/561d43ece4b001f1ad42dda6/1629229674926-TYJU5X5B4OV02H880G2W/Illustration+of+Reading+Benefits"
              description="Reading is so much more than simply scanning words across a page and lugging around thick books in public to seem smart. There is something special about a good book, article, or story."
            />
            <NewsBlogs
              title="What Books you should read in 2020?"
              user="James Wong"
              date="3 August 2020"
              profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGJPxvhV4u_WpRUlvawm9YpDkbtL0d8D2FlZ6HgC5JcoeHfqR-FmG0eWyeLfbATOv2EU&usqp=CAU"
              link="https://towardsdatascience.com/startup-books-you-should-read-in-2020-ba8684000128"
              img="https://miro.medium.com/v2/resize:fit:1400/1*Jg1oYMG_dN2MxbBzlgo0Xg.jpeg"
              description="Reading books is one of the activities often quoted among those which characterizes successful CEOs. Our economy became a place where innovations are happening at small to medium-sized companies,"
            />
            <NewsBlogs
              title="10 Things you must know to improve your reading skills"
              user="Franklin Junior"
              date="1 August 2020"
              profile="https://www.vhv.rs/dpng/d/551-5511364_circle-profile-man-hd-png-download.png"
              link="https://blog.madeeasy.in/how-to-improve-reading-skills"
              img="https://blog.madeeasy.in/wp-content/uploads/2022/02/how-to-improve-reading-skills-11-feb-2022.jpg"
              description="No matter whether you read biographies, watch inspirational videos or listen to interviews of people who have created a mark for themselves in the world the one trait that stays common with all is ‘Reading’. "
            />
          </div>
        </div>
        <div className="counter container mx-auto md:py-[20px] lg:px-14">
          <div className="flex flex-col mx-auto gap-6 justify-between sm:grid grid-cols-2 md:gap-y-10 lg:grid-cols-4">
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
