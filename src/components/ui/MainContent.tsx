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
import { Book, LayoutType } from "../../types/book.ts";

import React from "react";
import IsEmpty from "../../states/is-empty.tsx";
import IsLoading from "../../states/is-loading.tsx";

function MainContent({
  books,
  pageRange,
  layout,
  setLayout,
  handleNextPage,
  handlePreviousPage,
  pageLimit,
  isLoading,
  isSuccess,
}: {
  books: Book[];
  pageRange: [number, number];
  layout: LayoutType;
  setLayout: React.Dispatch<React.SetStateAction<LayoutType>>;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  pageLimit: number;
  isLoading: boolean;
  isSuccess: boolean;
}) {
  const options = ["Newest", "Popular", "Featured"];
  const toggleGroupItemClasses =
    "ToggleGroup.Item  hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 ";

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
      {isLoading && <IsLoading />}
      {isSuccess && books.length === 0 && <IsEmpty />}
      {isSuccess && layout === LayoutType.GRID ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 py-8">
          {books.map((book) => {
            return <CardComponent book={book} key={book.id} />;
          })}
        </div>
      ) : (
        <div className="gap-4 py-8 flex flex-col">
          {books.map((book) => {
            return <CardListLayout book={book} key={book.id} />;
          })}
        </div>
      )}
      <div className="flex items-center justify-between">
        {books.length > 1 ? <p>Showing {books.length} books</p> : null}
        <div className="flex">
          {pageRange[0] > 0 && (
            <Button onClick={handlePreviousPage} variant="secondary">
              <div className="flex items-center justify-between">
                <ChevronLeft color="var(--gray-01)" /> <span>Previous</span>
              </div>
            </Button>
          )}

          {books.length === pageLimit && (
            <Button onClick={handleNextPage} variant="secondary">
              <div className="flex items-center justify-between">
                <ChevronRight color="var(--gray-01)" /> <span>Next</span>
              </div>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
