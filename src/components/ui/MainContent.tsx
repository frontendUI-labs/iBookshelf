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
import CardComponent, { CardListLayout } from "./card-component";
import { twMerge } from "tailwind-merge";
// import { useMemo } from "react";

type Book = {
  author: string;
  cover: string;
  created_at: string;
  genreId: null;
  id: number;
  isFavorite: null;
  pages: null;
  price: number;
  publisher: null;
  reviewsCount: number;
  reviewsStar: number;
  synopsis: null;
  title: string;
  year: null;
};

const BOOK_PAGINATION_COUNT = 12;

function MainContent({
  books,
  pageRange,
  setPageRange, // checkInput,
  layout,
  setLayout,
}: {
  books: Book[];
  pageRange: number[];
  setPageRange: () => number[];
  checkInput: string;
}) {
  const options = ["Newest", "Popular", "Featured"];
  const toggleGroupItemClasses =
    "ToggleGroup.Item  hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 ";

  console.log(pageRange, "pageRange");

  const handlePreviousPage = () => {
    setPageRange(([startPage, endPage]: [number, number]) => [
      startPage - BOOK_PAGINATION_COUNT,
      endPage - BOOK_PAGINATION_COUNT,
    ]);
  };

  const handleNextPage = () => {
    setPageRange(([startPage = 0, endPage = BOOK_PAGINATION_COUNT]) => [
      startPage + BOOK_PAGINATION_COUNT,
      endPage + BOOK_PAGINATION_COUNT,
    ]);
  };

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
              if (value) setLayout(value);
            }}
          >
            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value="list"
              aria-label="list"
            >
              <List
                className={twMerge(layout === "list" && "text-purple-600")}
              />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className={toggleGroupItemClasses}
              value="grid"
              aria-label="grid"
            >
              <LayoutGrid
                className={twMerge(layout === "grid" && "text-purple-600")}
              />
            </ToggleGroup.Item>
          </ToggleGroup.Root>

          {/* <Button variant="icon"> {<List />}</Button>
          <Button variant="icon" id="grid">
            <LayoutGrid />
          </Button>
          <Button variant="icon" id="masonty">
            <LayoutPanelLeft />
          </Button> */}

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
      {layout === "grid" && (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 py-8">
          {books.map((book) => {
            return (
              <CardComponent
                key={book.author}
                author={book.author}
                cover={book.cover}
                value={book.reviewsStar}
              />
            );
          })}
        </div>
      )}
      {layout === "list" && (
        <div className="gap-4 py-8 flex flex-col">
          {books.map((book) => {
            return (
              <CardListLayout
                key={book.id}
                author={book.author}
                cover={book.cover}
                value={book.reviewsStar}
                title={book.title}
                price={book.price}
              />
            );
          })}
        </div>
      )}
      <div className="flex items-center justify-between">
        <p>Showing {books.length} from 50 data</p>
        <div className="flex">
          {(pageRange?.[0] as number) > 0 && (
            <Button onClick={handlePreviousPage} variant="secondary">
              <div className="flex items-center justify-between">
                <ChevronLeft color="var(--gray-01)" /> <span>Previous</span>
              </div>
            </Button>
          )}

          {books.length === 12 && (
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
