import * as ToggleGroup from "@radix-ui/react-toggle-group";

import {
  ArrowDownWideNarrow,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
} from "lucide-react";
import Button from "../../common/Button";
import Select from "../../common/Select";
import CardComponent, { CardListLayout } from "./Card";
import { twMerge } from "tailwind-merge";
import { Book } from "../../types/type";
import {
  BOOK_PAGINATION_COUNT,
  BOOK_PAGINATION_LIST,
} from "../../constants/books";
import React from "react";
import { LayoutType } from "../../pages/FilterPage.tsx";

// import { useMemo } from "react";

function MainContent({
  books,
  pageRange,
  layout,
  setLayout,
  bookList,
  pageRangeList,
  handleNextPage,
  handlePreviousPage,
  handlePreviousPageList,
  handleNextPageList, // pageRangeList,
  // setPageRangeList,
}: {
  books: Book[];
  pageRange: [number, number];
  layout: LayoutType;
  setLayout: React.Dispatch<React.SetStateAction<LayoutType>>;
  bookList: Book[];
  pageRangeList: [number, number];
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePreviousPageList: () => void;
  handleNextPageList: () => void;
}) {
  const options = ["Newest", "Popular", "Featured"];
  const toggleGroupItemClasses =
    "ToggleGroup.Item  hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 ";

  // const handlePreviousPage = () => {
  //   window.scrollTo(0, 0);
  //   setPageRange(([startPage, endPage]: [number, number]) => [
  //     startPage - BOOK_PAGINATION_COUNT,
  //     endPage - BOOK_PAGINATION_COUNT,
  //   ]);
  // };

  // const handleNextPage = () => {
  //   window.scrollTo(0, 0);
  //   setPageRange(([startPage = 0, endPage = BOOK_PAGINATION_COUNT]) => [
  //     startPage + BOOK_PAGINATION_COUNT,
  //     endPage + BOOK_PAGINATION_COUNT,
  //   ]);
  // };

  // const handlePreviousPageListLayout = () => {
  //   window.scrollTo(0, 0);
  //   setPageRangeList(([startPage, endPage]: [number, number]) => [
  //     startPage - BOOK_PAGINATION_LIST,
  //     endPage - BOOK_PAGINATION_LIST,
  //   ]);
  // };
  // const handleNextPageListLayout = () => {
  //   window.scrollTo(0, 0);
  //   setPageRangeList(([startPage = 0, endPage = BOOK_PAGINATION_LIST]) => [
  //     startPage + BOOK_PAGINATION_LIST,
  //     endPage + BOOK_PAGINATION_LIST,
  //   ]);
  // };

  return (
    <div className=" p-4">
      <h3 className="text-4xl font-bold">Books</h3>
      <div className="flex justify-between items-center border-[1px] border-gray-200 rounded-lg">
        <div className="flex">
          <Button variant="secondary"> Today</Button>
          <Button variant="secondary"> This Week</Button>
          <Button variant="secondary"> This Month</Button>
        </div>
        <div className="flex items-center justify-center">
          <ToggleGroup.Root
            className="inline-flex bg-mauve6 rounded "
            type="single"
            aria-label="Layout"
            onValueChange={(value) => {
              if (value) setLayout(value as LayoutType);
            }}
          >
            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value="list"
              aria-label="list"
            >
              <List
                className={twMerge(
                  layout === LayoutType.LIST && "text-purple-600"
                )}
              />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value="grid"
              aria-label="grid"
            >
              <LayoutGrid
                className={twMerge(
                  layout === LayoutType.GRID && "text-purple-600"
                )}
              />
            </ToggleGroup.Item>
          </ToggleGroup.Root>
          <Select
            options={options}
            placeholder={
              <div className="flex items-center gap-4">
                <ArrowDownWideNarrow color="var(--gray-01)" />
                <span className="font-bold">Newest</span>
              </div>
            }
            variant="tertiary"
            color="var(--gray-01)"
          />
        </div>
      </div>
      {layout === LayoutType.GRID ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 py-8">
          {books.map((book) => {
            return (
              <CardComponent
                key={book.id}
                title={book.title}
                cover={book.cover}
                value={book.rating}
                slug={book.slug}
              />
            );
          })}
        </div>
      ) : (
        <div className="gap-4 py-8 flex flex-col">
          {bookList.map((book) => {
            return (
              <CardListLayout
                key={book.id}
                author={book.author}
                cover={book.cover}
                value={book.rating}
                title={book.title}
                price={book.price}
                synopsis={book.synopsis ?? ""}
                pages={book.pages ?? 321}
                publisher={book.publisher ?? "Santillana"}
                totalReviews={book.totalReviews}
                slug={book.slug}
              />
            );
          })}
        </div>
      )}
      <div className="flex items-center justify-between">
        <p>Showing {books.length} from 50 data</p>
        {layout === LayoutType.GRID && (
          <div className="flex">
            {pageRange[0] > 0 && (
              <Button onClick={handlePreviousPage} variant="secondary">
                <div className="flex items-center justify-between">
                  <ChevronLeft color="var(--gray-01)" /> <span>Previous</span>
                </div>
              </Button>
            )}

            {books.length === BOOK_PAGINATION_COUNT && (
              <Button onClick={handleNextPage} variant="secondary">
                <div className="flex items-center justify-between">
                  <ChevronRight color="var(--gray-01)" /> <span>Next</span>
                </div>
              </Button>
            )}
          </div>
        )}
        {layout === LayoutType.LIST && (
          <div className="flex">
            {pageRangeList[0] > 0 && (
              <Button onClick={handlePreviousPageList} variant="secondary">
                <div className="flex items-center justify-between">
                  <ChevronLeft color="var(--gray-01)" /> <span>Previous</span>
                </div>
              </Button>
            )}

            {bookList.length === BOOK_PAGINATION_LIST && (
              <Button onClick={handleNextPageList} variant="secondary">
                <div className="flex items-center justify-between">
                  <ChevronRight color="var(--gray-01)" /> <span>Next</span>
                </div>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainContent;
