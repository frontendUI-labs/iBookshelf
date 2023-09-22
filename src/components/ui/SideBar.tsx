// import {  useState } from "react";
import Button from "../../common/Button";
import AcordionComponent from "./Accordion";
import SliderInputComponent from "./SliderInput";
import { useGetCategories } from "../../hooks/categories.ts";
import React from "react";
import { Link } from "react-router-dom";
import { useGetRecommendedBooks } from "../../hooks/books.ts";
import { Rating } from "./Icons.tsx";
import { twMerge } from "tailwind-merge";

function SideBar({
  priceRange,
  range,
  setRange,
  setRating,
  rating,
  selectedCategory,
  setOrderBooks,
}: {
  priceRange: [number, number];
  range: [number, number];
  setRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  rating: number;
  selectedCategory: string;
  setOrderBooks: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isSuccess, categories, isError, isLoading } = useGetCategories();
  const { isSuccess: isRecommendedSuccess, recommendedBooks } =
    useGetRecommendedBooks();
  return (
    <div className=" p-4">
      <h3 className="text-4xl font-bold">Filter Option</h3>
      <div className=" flex flex-col gap-6">
        <AcordionComponent
          title={`Best Sales (${recommendedBooks.length})`}
          id="item-1"
        >
          {isRecommendedSuccess &&
            recommendedBooks.map((book) => (
              <Link
                key={book.id}
                className="block truncate hover:text-purple-600 hover:bg-purple-400 p-1 focus:bg-purple-400 outline-purple-600"
                to={`/details/${book.slug}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                {book.title}
              </Link>
            ))}
        </AcordionComponent>

        {isError && <p>Something went wrong</p>}
        {isLoading && <p>Loading...</p>}
        <AcordionComponent id="main-2" title="Filter by Category">
          {isSuccess &&
            categories.map((category) => {
              return (
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className={twMerge(
                    "block truncate hover:text-purple-600  capitalize hover:bg-purple-400 p-1 focus:bg-purple-400 outline-purple-600",
                    selectedCategory === category.slug && "bg-purple-400"
                  )}
                  to={`/filter/${category.slug}`}
                  key={category.id}
                >
                  {category.name}
                </Link>
              );
            })}
        </AcordionComponent>

        <AcordionComponent title="Filter by Price" id="main-3">
          <SliderInputComponent
            range={range}
            setRange={setRange}
            priceRange={priceRange}
          />
        </AcordionComponent>
        <AcordionComponent title="Filter by Stars" id="main-4">
          {[5, 4, 3, 2, 1].map((value) => (
            <Rating
              key={value}
              setOrderBooks={setOrderBooks}
              setRating={setRating}
              value={value}
              isActive={value === rating}
            />
          ))}
        </AcordionComponent>
        <AcordionComponent title="Filter by Language" id="main-5">
          {["Spanish", "English", "French", "Italian", "Portuguese"].map(
            (language, id) => (
              <Link
                className={twMerge(
                  "block truncate hover:text-purple-600  capitalize hover:bg-purple-400 p-1 focus:bg-purple-400 outline-purple-600"
                  // selectedCategory === language && "bg-purple-400"
                )}
                to={`/filter/${language}`}
                key={id}
              >
                {language}
              </Link>
            )
          )}
        </AcordionComponent>
      </div>

      <Link to={"/filter"} className="w-full">
        <Button
          onClick={() => {
            setRating(0);
            setRange([0, 16]);
          }}
          variant="primary"
        >
          Reset Filter
        </Button>
      </Link>
    </div>
  );
}

export default SideBar;
