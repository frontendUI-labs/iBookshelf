import {
  ArrowDownWideNarrow,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  LayoutPanelLeft,
  List,
} from "lucide-react";
import Button from "../../common/Button";
import Select from "../../common/Select";
import CardComponent from "./card-component";
import { Book } from "../../data/useGetBooks";

const BOOK_PAGINATION_COUNT = 12;

function MainContent({
  books,
  pageRange,
  setPageRange,
}: {
  books: Book[];
  pageRange: number[];
  setPageRange: any;
}) {
  const options = ["Newest", "Popular", "Featured"];

  // React.useEffect(() => {
  //   const getAllBooks = async (): Promise<Book[]> => {
  //     const response = await fetch(
  //       "https://oytjtiafvlwbvupijhqy.supabase.co/rest/v1/Books?select=*",
  //       {
  //         headers: {
  //           apikey: import.meta.env["VITE_APP_SUPABASE_KEY"] as string,
  //           Authorization: `Bearer ${import.meta.env["VITE_APP_SUPABASE_KEY"]}`,
  //           Range: pageRange.join("-"),
  //         },
  //       }
  //     );
  //     const books = await response.json();
  //     return books as Book[];
  //   };
  //   getAllBooks()
  //     .then((data) => {
  //       setBooks(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [pageRange]);

  const handlePreviousPage = () => {
    setPageRange(([startPage, endPage]) => [
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
  console.log(pageRange, "PageRange");

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
          <Button variant="icon"> {<List />}</Button>
          <Button variant="icon" id="grid">
            <LayoutGrid />
          </Button>
          <Button variant="icon" id="masonty">
            <LayoutPanelLeft />
          </Button>

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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 py-8">
        {books.map((book) => {
          return (
            <CardComponent
              key={book.id}
              author={book.author}
              cover={book.cover}
              value={book.reviewsStar}
            />
          );
        })}
      </div>
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
