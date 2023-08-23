// import {  useState } from "react";
import Button from "../../common/Button";
import AcordionComponent from "./Accordion";
import SliderInputComponent from "./SliderInput";
import { useGetCategories } from "../../hooks/categories.ts";
import React from "react";
import { Link } from "react-router-dom";
import { useGetRecommendedBooks } from "../../hooks/books.ts";

function SideBar({
  priceRange,
  range,
  setRange,
}: {
  range: [number, number];
  priceRange: [number, number];
  setRange: React.Dispatch<React.SetStateAction<[number, number]>>;
}) {
  const { isSuccess, categories, isError, isLoading } = useGetCategories();
  const { isSuccess: isRecommendedSuccess, recommendedBooks } =
    useGetRecommendedBooks();

  return (
    <div className=" p-4">
      <h3 className="text-4xl font-bold">Filter Option</h3>
      <div className=" flex flex-col gap-6">
        <AcordionComponent title="Best Sales (6)" id="item-1">
          {isRecommendedSuccess &&
            recommendedBooks.map((book) => (
              <Link
                key={book.id}
                className="block truncate hover:text-purple-600 hover:bg-purple-400 p-1 focus:bg-purple-400 outline-purple-600"
                to={`/details/${book.slug}`}
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
                  className="block truncate hover:text-purple-600  capitalize hover:bg-purple-400 p-1 focus:bg-purple-400 outline-purple-600"
                  to={`/${category.slug}`}
                  key={category.id}
                >
                  {category.name}
                </Link>
              );
            })}
        </AcordionComponent>

        <AcordionComponent title="Price Range" id="main-3">
          <SliderInputComponent
            range={range}
            setRange={setRange}
            priceRange={priceRange}
          />
        </AcordionComponent>
      </div>
      <div className="w-full">
        <Button type="submit" variant="primary">
          Refine Search
        </Button>
        <Button variant="secondary">Reset Filter</Button>
      </div>
    </div>
  );
}

export default SideBar;
