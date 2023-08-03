import type { FunctionComponent } from "../common/types";
import bookList from "../data/books.json";
import { useCallback, useMemo, useState } from "react";

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

const Home = (): FunctionComponent => {
  const [books] = useState(bookList.library);

  const genres = getGenres(books);
  const { minPage, maxPage } = getMinMaxPages(books);
  const [numberPage, setNumberPage] = useState(maxPage);
  const [selectedGenre, setSelectedGenre] = useState("Todas");
  const [layout, setLayout] = useState("grid");

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

  return (
    <div className="container mx-auto px-4 py-10">
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
                className="w-[500px]"
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
          <div className="layout-actions">
            <label htmlFor="lista">
              <span>List</span>
            </label>
            <input
              hidden
              onChange={(event) => {
                setLayout(event.target.value);
              }}
              type="radio"
              name="display"
              id="lista"
              value={"list"}
            />
            <label htmlFor="grid">
              <span>Grid</span>
            </label>
            <input
              hidden
              type="radio"
              name="display"
              id="grid"
              value={"grid"}
              onChange={(event) => {
                setLayout(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <ul className={layout === "grid" ? "grid__mode" : "list__mode"}>
        {/* <ul className={}> */}
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li
              key={book.book.ISBN}
              className={layout === "grid" ? "grid__li" : "list__li"}
            >
              <img
                className={layout === "grid" ? "img__grid" : "img__list"}
                src={book.book.cover}
                alt=""
              />
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
