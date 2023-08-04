import type { FunctionComponent } from "../common/types";
import bookList from "../data/books.json";
import React, { useCallback, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import LayoutTypeInput from "../components/ui/LayoutTypeInput.tsx";
import { GridLayoutIcon, ListLayoutIcon } from "../assets/icons";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Slider from "@radix-ui/react-slider";
import GenreSelect from "../components/ui/GenreSelect.tsx";
import Button from "../common/Button.tsx";

type Author = {
  name: string;
  otherBooks: string[];
};

type Book = {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
};

type Library = {
  book: Book;
};

const getGenres = (books: Library[]): string[] => {
  const genres: string[] = [];
  books.forEach((book) => {
    if (!genres.includes(book.book.genre)) {
      genres.push(book.book.genre);
    }
  });
  return genres;
};

const getMinMaxPages = (
  books: Library[]
): {
  minPage: number;
  maxPage: number;
} => {
  const bookPages = books.map((book) => {
    return book.book.pages;
  });
  const minPage = Math.min(...bookPages);
  const maxPage = Math.max(...bookPages);
  return { minPage, maxPage };
};

type LayoutType = "grid" | "list";
const DeleteBookButton = ({ onDelete }: { onDelete: () => void }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild className="">
        <div className="absolute z-0 group-hover:bg-black opacity-80 w-full h-full">
          <button className="hidden group-hover:block absolute right-1 top-2 w-8 h-8">
            <img
              className="w-full h-full hover:-rotate-[20deg] duration-75"
              src="/icons/trash-icon.svg"
              alt=""
            />
          </button>
        </div>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-neutral-800 opacity-70 fixed inset-0" />
        <AlertDialog.Content className="w-[90vw] max-w-[500px] max-h-[85vh] p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-50 rounded-md shadow-[hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px]">
          <AlertDialog.Title className="text-xl mb-10">
            Are you absolutely sure to delete?
          </AlertDialog.Title>
          <div className="flex gap-5 justify-end">
            <AlertDialog.Cancel asChild>
              <Button variant="secondary">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button variant="danger" onClick={onDelete}>
                Yes, delete
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

type SliderDemoProps = {
  minPage: number;
  maxPage: number;
};

const SliderDemo: React.FC<SliderDemoProps> = ({ minPage, maxPage }) => {
  return (
    <form>
      <p className="text-[18px] font-semibold">Filter by pages</p>
      <div className="flex items-center gap-3 mt-4">
        <p className="italic">MIN: {minPage} </p>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-[300px] h-5"
          defaultValue={[0]}
          max={100}
          step={1}
        >
          <Slider.Track className="bg-[#9fb3b551] relative grow rounded-full h-[8px]">
            <Slider.Range className="absolute bg-[#215073] rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-[#215073] shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-[#A1B7B9]"
            aria-label="Volume"
          />
        </Slider.Root>
        <p className="italic">MAX: {maxPage} </p>
      </div>
    </form>
  );
};

type BookCardProps = {
  book: Library;
  isGridLayout: boolean;
  onDelete: () => void;
};
function BookCard({ book, isGridLayout, onDelete }: BookCardProps) {
  return (
    <li
      className={
        isGridLayout
          ? "flex flex-col gap-2"
          : "flex justify-between border-b-2 pb-7 py-10 items-center"
      }
    >
      <div className="group relative">
        <DeleteBookButton onDelete={onDelete} />
        <img
          className={isGridLayout ? "aspect-[2/3]" : "h-32  object-cover"}
          src={book.book.cover}
          alt=""
        />
      </div>

      <h2 className="text-xl font-bold capitalize">{book.book.title}</h2>
      <p>{book.book.author.name}</p>
    </li>
  );
}

const removeAccents = (text: string): string =>
  text.normalize("NFD").replace(/[\u0300-\u036F]/g, "");

const Home = (): FunctionComponent => {
  const [books, setBooks] = useState(bookList.library);

  const genres = getGenres(books);
  const { minPage, maxPage } = getMinMaxPages(books);
  const [numberPage, setNumberPage] = useState(maxPage);
  const [selectedGenre, setSelectedGenre] = useState("Todas");
  const [layout, setLayout] = useState<LayoutType>("grid"); // grid | list
  const [searchBook, setSearchBook] = useState("");

  const handlePageNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberPage(Number(event.target.value));
  };

  const handleGenre = useCallback((genre: string) => {
    setSelectedGenre(genre);
  }, []);

  const filteredGenreBooks = useMemo(() => {
    return selectedGenre === "Todas"
      ? books
      : books.filter((b) => b.book.genre === selectedGenre);
  }, [books, selectedGenre]);

  const filteredPagesBooks = useMemo(() => {
    return filteredGenreBooks.filter((b) => b.book.pages <= numberPage);
  }, [filteredGenreBooks, numberPage]);

  const bookResults = useMemo(() => {
    return filteredPagesBooks.filter((b) => {
      const cleanTitle = removeAccents(b.book.title.toLowerCase());
      const cleanSearchText = removeAccents(searchBook.trim().toLowerCase());
      return cleanTitle.includes(cleanSearchText);
    });
  }, [searchBook, filteredPagesBooks]);

  const isGridLayout = layout === "grid";

  const handleDelete = (ISBN: string) => {
    const deleteBooks = books.filter((books) => books.book.ISBN !== ISBN);
    setBooks(deleteBooks);
  };

  return (
    <div className="relative container mx-auto px-4 py-10">
      <h1 className="text-4xl mb-10 font-bold">
        Lista de libros{" "}
        {bookResults.length > 0 && (
          <span className="mb-6 text-base">
            ({bookResults.length} libros disponibles)
          </span>
        )}
      </h1>
      <div>
        <div className="flex gap-10 justify-between items-center">
          <SliderDemo minPage={minPage} maxPage={maxPage} />
          <div className="flex flex-col gap-4">
            <label htmlFor="volume">Filtrar por paginas</label>
            <div className="flex gap-5">
              <span>Min:{minPage}</span>
              <input
                type="range"
                id="volume"
                name="volume"
                min={minPage}
                max={maxPage}
                className="w-[300px]"
                value={numberPage}
                onChange={handlePageNumber}
              />
              <span>Max:{maxPage}</span>
            </div>
          </div>
          <GenreSelect
            value={selectedGenre}
            onChange={handleGenre}
            options={["Todas", ...genres]}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="search">Buscar por nombre del libro</label>
            <input
              className="outline-white h-[40px] p-3 bg-slate-200 text-base"
              value={searchBook}
              onChange={(event) => {
                setSearchBook(event.target.value);
              }}
              id="search"
              type="text"
              placeholder="Eg: Harry Potter"
            />
          </div>
          <div className="flex items-center gap-2">
            <LayoutTypeInput
              value="list"
              id="list"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setLayout(event.target.value as LayoutType);
              }}
              label="List"
              icon={<ListLayoutIcon />}
              isChecked={!isGridLayout}
            />
            <LayoutTypeInput
              value="grid"
              id="grid"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setLayout(event.target.value as LayoutType);
              }}
              label="Grid"
              icon={<GridLayoutIcon />}
              isChecked={isGridLayout}
            />
          </div>
        </div>
      </div>
      <ul
        className={twMerge(
          "mt-10 grid gap-x-20",
          isGridLayout ? "grid-cols-5 gap-y-14" : "grid-cols-1 items-center"
        )}
      >
        {bookResults.length > 0 ? (
          bookResults.map((book) => {
            return (
              <BookCard
                key={book.book.ISBN}
                book={book}
                isGridLayout={isGridLayout}
                onDelete={() => {
                  handleDelete(book.book.ISBN);
                }}
              />
            );
          })
        ) : (
          <p>No hay libros disponibles</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
