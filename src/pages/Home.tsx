import type { FunctionComponent } from "../common/types";
import bookList from "../data/books.json";
import React, { useCallback, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import LayoutTypeInput from "../components/ui/LayoutTypeInput.tsx";
import { GridLayoutIcon, ListLayoutIcon } from "../assets/icons";
import * as Slider from "@radix-ui/react-slider";
import GenreSelect from "../components/ui/GenreSelect.tsx";
import { AddBookButton } from "../components/ui/AddBookButton.tsx";
import { EditBookButton } from "../components/ui/EditBookButton.tsx";
import DeleteBookButton from "../components/ui/DeleteBookButton.tsx";
import {
  getUser,
  signInWithGithub,
  signInWithPassword,
  signOut,
  signUp,
} from "../api/supabase/auth.ts";
import { User } from "@supabase/supabase-js";
import { getAllBooks } from "../api/supabase/books.ts";

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

export type Library = {
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

type SliderDemoProps = {
  value: number;
  minPage: number;
  maxPage: number;
  onChange: (value: number[]) => void;
};

const PagesSlider: React.FC<SliderDemoProps> = ({
  value,
  onChange,
  minPage,
  maxPage,
}) => {
  return (
    <div>
      <p>Filtrar por páginas</p>
      <div className="flex items-center gap-3 mt-4">
        <Slider.Root
          className="relative flex items-center select-none touch-none w-[300px] h-5"
          max={maxPage}
          min={minPage}
          step={20}
          value={[value]}
          onValueChange={onChange}
        >
          <Slider.Track className="relative grow rounded-full h-[8px] bg-[rgb(244_244_245)]">
            <Slider.Range className="absolute bg-[rgb(24_24_27)] rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-white rounded-[10px] border-2 border-[rgb(24_24_27)]"
            aria-label="Volume"
          />
        </Slider.Root>
        <p className="italic">MAX: {value} </p>
      </div>
    </div>
  );
};

type BookCardProps = {
  book: Library;
  isGridLayout: boolean;
  onDelete: () => void;
  books: Library[];
  onBooksChange: (books: Library[]) => void;
};
function BookCard({
  book,
  onBooksChange,
  books,
  isGridLayout,
  onDelete,
}: BookCardProps) {
  return (
    <li
      className={
        isGridLayout
          ? "flex flex-col gap-2"
          : "flex justify-between border-b-2 pb-7 py-10 items-center"
      }
    >
      <div className="group relative">
        <EditBookButton
          onBooksChange={onBooksChange}
          books={books}
          book={book}
        />
        <DeleteBookButton onDelete={onDelete} />

        <img
          className={
            isGridLayout ? "aspect-[2/3] object-cover" : "h-32  object-cover "
          }
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

type RealBook = {
  author: string;
  cover: string;
  created_at: string;
  genreId: null;
  id: number;
  isFavorite: boolean;
  pages: number;
  price: number;
  publisher: null;
  reviewsCount: number;
  reviewsStar: number;
  synopsis: string;
  title: string;
  year: number;
};

const Home = (): FunctionComponent => {
  const [user, setUser] = useState<null | User>(null);
  const [books, setBooks] = useState(bookList.library);
  const genres = getGenres(books);
  const { minPage, maxPage } = getMinMaxPages(books);

  const [numberPage, setNumberPage] = useState(maxPage);
  const [selectedGenre, setSelectedGenre] = useState("Todas");
  const [layout, setLayout] = useState<LayoutType>("grid"); // grid | list
  const [searchBook, setSearchBook] = useState("");

  React.useEffect(() => {
    setNumberPage(maxPage);
  }, [maxPage]);

  const handlePageNumber = (values: number[]) => {
    const [value] = values;
    setNumberPage(value ?? minPage);
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

  React.useEffect(() => {
    // const getAllBooks = async () => {
    //   const response = await fetch(
    //     "https://oytjtiafvlwbvupijhqy.supabase.co/rest/v1/Books?select=*",
    //     {
    //       headers: {
    //         apikey: "",
    //         Authorization: "",
    //       },
    //     }
    //   );
    //   return await response.json();
    // };

    getAllBooks()
      .then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const realBooks: RealBook[] = data.data ?? [];
        const mapBooks = realBooks.map((b) => ({
          book: {
            title: b.title,
            pages: b.pages,
            genre: "horror",
            cover: b.cover,
            synopsis: "lorem",
            year: 2010,
            ISBN: b.id.toString(),
            author: {
              name: b.author,
              otherBooks: ["a"],
            },
          },
        }));
        setBooks(mapBooks);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);
  React.useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="relative container mx-auto px-4 py-10">
      <div className="p-10 border-2 border-gray-300 rounded-2xl mb-10 space-y-4">
        {user != null && (
          <div>
            <img
              className="h-20 w-20 rounded-full"
              src={
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                user.user_metadata?.avatar_url ??
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fdefault-avatar-icon-12.png&f=1&nofb=1&ipt=5c37ba560af5326914a09c8cdcf43b4c7181d033ba6dc8404436eafa6589f077&ipo=images"
              }
              alt=""
            />
            <span>
              {user.app_metadata.provider === "email"
                ? user.email
                : user?.user_metadata?.full_name}
            </span>
          </div>
        )}
        <button
          className="block bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={signUp}
        >
          Sign up default user
        </button>
        <button
          className="block bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={async () => {
            const result = await signInWithPassword();
            setUser(result.data.user);
          }}
        >
          Sign in with default user
        </button>
        <button
          className=" block bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={signInWithGithub}
        >
          Sign in with Github
        </button>

        <button
          className="block bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={async () => {
            try {
              await signOut();
              setUser(null);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Sign out
        </button>
      </div>

      <h1 className="text-4xl mb-10 font-bold">
        Lista de libros{" "}
        {bookResults.length > 0 && (
          <span className="mb-6 text-base">
            ({bookResults.length} libros disponibles)
          </span>
        )}
      </h1>
      <div>
        <div className="flex gap-10 justify-between items-center flex-wrap ">
          <PagesSlider
            value={numberPage}
            onChange={handlePageNumber}
            minPage={minPage}
            maxPage={maxPage}
          />
          <GenreSelect
            label="Filtrar por genero"
            value={selectedGenre}
            onChange={handleGenre}
            options={["Todas", ...genres]}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="search">Buscar por nombre del libro</label>
            <input
              className="h-[40px] p-3 bg-white border-[1px] border-[rgb(24_24_27)] text-base placeholder:text-neutral-700 rounded-[10px] focus:outline-none focus:ring-[1px] focus:ring-[rgb(24_24_27)]"
              value={searchBook}
              onChange={(event) => {
                setSearchBook(event.target.value);
              }}
              id="search"
              type="text"
              placeholder="Ej: Harry Potter"
            />
          </div>
          {/* <div>
            <CreateBookButton books={books} addNewBooks={setBooks} />
          </div> */}
          <div className="flex items-center gap-2">
            <LayoutTypeInput
              value="list"
              id="list"
              onChange={(event) => {
                setLayout(event.target.value as LayoutType);
              }}
              label="List"
              icon={<ListLayoutIcon />}
              isChecked={!isGridLayout}
            />
            <LayoutTypeInput
              value="grid"
              id="grid"
              onChange={(event) => {
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
          isGridLayout
            ? "grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-y-14"
            : "grid-cols-1 items-center"
        )}
      >
        <AddBookButton onBooksChange={setBooks} books={books} />
        {bookResults.length > 0 ? (
          bookResults.map((book) => {
            return (
              <BookCard
                books={books}
                onBooksChange={setBooks}
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
