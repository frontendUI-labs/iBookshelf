import type { FunctionComponent } from "../common/types";
import bookList from "../data/books.json";
import { useCallback, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import LayoutTypeInput from "../components/ui/LayoutTypeInput.tsx";
import { GridLayoutIcon, ListLayoutIcon } from "../assets/icons";

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

const Home = (): FunctionComponent => {
  const [books, setBooks] = useState(bookList.library);

  const genres = getGenres(books);
  const { minPage, maxPage } = getMinMaxPages(books);
  const [numberPage, setNumberPage] = useState(maxPage);
  const [selectedGenre, setSelectedGenre] = useState("Todas");
  const [layout, setLayout] = useState<LayoutType>("grid"); // grid | list
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handlePageNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberPage(Number(event.target.value));
  };

  const handleGenre = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedGenre(event.target.value);
    },
    []
  );

  const filteredGenreBooks = useMemo(() => {
    return selectedGenre === "Todas"
      ? books
      : books.filter((b) => b.book.genre === selectedGenre);
  }, [books, selectedGenre]);

  const filteredBooks = useMemo(() => {
    return filteredGenreBooks.filter((b) => b.book.pages <= numberPage);
  }, [filteredGenreBooks, numberPage]);

  const isGridLayout = layout === "grid";

  // const handleDelete = (ISBN: string) => {
  //   const deleteBooks = books.filter((books) => books.book.ISBN !== ISBN);
  //   setBooks(deleteBooks);
  // };
  const Dialog = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="absolute bg-[#232222cf]  w-full h-full">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 z-10  bg-[#F2F2F2]  p-10 flex flex-col items-center gap-10 w-60">
          <p>Are you sure to delete this book?</p>
          <div className="flex gap-4">
            <button
              className="bg-[#b3aeaee7] text-[#ffffff] border-double border-4 rounded-md w-24 py-2"
              onClick={onClose}
            >
              Close
            </button>
            <button
              onClick={() => {
                // handleDelete(books.book.ISBN);
              }}
              className="bg-[#1C73E8] text-[#ffffff] border-double border-4 rounded-md w-24 py-2"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative container mx-auto px-4 py-10">
      <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog} />

      <h1 className="text-4xl mb-10 font-bold">
        Lista de libros{" "}
        {filteredBooks.length > 0 && (
          <span className="mb-6 text-base">
            ({filteredBooks.length} libros disponibles)
          </span>
        )}
      </h1>
      <div>
        <div className="flex gap-10 justify-between items-center">
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
          <div className="flex flex-col gap-4">
            <label htmlFor="genre">Filtrar por genero</label>
            <select
              value={selectedGenre}
              onChange={handleGenre}
              name="genre"
              id="genre"
            >
              {["Todas", ...genres].map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
              <option value="Anime"> Anime</option>
            </select>
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
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li
              key={book.book.ISBN}
              className={
                isGridLayout
                  ? "flex flex-col gap-2"
                  : "flex justify-between border-b-2 pb-7 py-10 items-center"
              }
            >
              <div className="group relative">
                <div className="absolute w-full h-full hover:bg-[#1e1e1e6e] ">
                  <div></div>
                  <button
                    onClick={handleOpenDialog}
                    // onClick={() => {
                    //   handleDelete(book.book.ISBN);
                    // }}
                    className="hidden group-hover:flex absolute right-2 top-2 w-8 h-8"
                  >
                    <img
                      className="absolute w-full h-full"
                      src="/icons/trash-icon.svg"
                      alt=""
                    />
                  </button>
                </div>
                <img
                  className={
                    isGridLayout ? "aspect-[2/3]" : "h-32  object-cover"
                  }
                  src={book.book.cover}
                  alt=""
                />
              </div>

              <h2 className="text-xl font-bold capitalize">
                {book.book.title}
              </h2>
              <p>{book.book.author.name}</p>
            </li>
          ))
        ) : (
          <p>No hay libros disponibles</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
