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
import { Trash2, Pencil, PlusSquare } from "lucide-react";
import EditInput from "../components/ui/EditInput.tsx";
import * as Dialog from "@radix-ui/react-dialog";
import AddInputorText from "../components/ui/AddInput.tsx";
import { randomID } from "../utils";

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
const DeleteBookButton = ({ onDelete }: { onDelete: () => void }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild className="">
        <div className=" hidden group-hover:block">
          <button className=" group-hover:block absolute right-0 top-2 w-8 h-8 bg-white p-1">
            <Trash2 color="red" aria-label="Remover libro" />
          </button>
        </div>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-neutral-800 opacity-70 fixed inset-0" />
        <AlertDialog.Content className="w-[90vw] max-w-[500px] max-h-[85vh] p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-[hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px]">
          <AlertDialog.Title className="text-xl mb-10">
            Estás seguro que deseas eliminar este libro?
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

export const EditBookButton = ({
  book,
  books,
  onBooksChange,
}: {
  book: Library;
  books: Library[];
  onBooksChange: (books: Library[]) => void;
}) => {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState(book.book.title);
  const [img, setImg] = useState(book.book.cover);
  const [authorName, setAuthorName] = useState(book.book.author.name);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="hidden group-hover:block absolute items-center justify-center  rounded-[4px] bg-white p-1 font-medium leading-none right-0 top-12 focus:shadow-[0_0_0_2px]   focus:outline-none">
          <Pencil color="black" aria-label="Editar libro" />{" "}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[rgba(0,0,0,.7)] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 text-[20px] font-medium">
            Edita un Libro
          </Dialog.Title>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              const newBooks = [...books];
              const bookIndex = newBooks.findIndex((b) => {
                return b.book.ISBN === book.book.ISBN;
              });
              const selectedBook = newBooks[bookIndex];
              if (selectedBook) {
                selectedBook.book.cover = img;
                selectedBook.book.title = title;
                selectedBook.book.author.name = authorName;
                onBooksChange(newBooks);
                setOpen(false);
              }
            }}
          >
            <EditInput
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setImg(event.target.value);
              }}
              value={img}
              label="Inserta un link"
              id="img"
            />
            <EditInput
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(event.target.value);
              }}
              value={title}
              label="Nuevo titulo?"
              id="title"
            />
            <EditInput
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setAuthorName(event.target.value);
              }}
              value={authorName}
              label="Nuevo autor?"
              id="author"
            />
            <Button variant="primary">Guardar</Button>
            <Dialog.Close asChild>
              <Button variant="secondary">Cancelar</Button>
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

type NewBookState = {
  title: string;
  pages?: number;
  genre?: string;
  cover: string;
  synopsis: string;
  year?: number;
  ISBN: string;
  authorName: string;
  authorOtherBooks: string[];
};

const initialAddBookState: NewBookState = {
  title: "",
  pages: undefined,
  genre: undefined,
  cover: "",
  synopsis: "",
  year: undefined,
  ISBN: "",
  authorName: "",
  authorOtherBooks: [],
};

export const AddBookButton = ({
  books,
  onBooksChange,
}: {
  books: Library[];
  onBooksChange: (books: Library[]) => void;
}) => {
  const [open, setOpen] = useState(false);
  const genres = getGenres(books);
  const [newBook, setNewBook] = useState<NewBookState>(initialAddBookState);

  const resetNewBookState = () => {
    setNewBook(initialAddBookState);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="w-full h-full bg-[#F2F2F2] border-2 border-[#E6E6E6] parent hover:bg-[#c2c2c2]">
          <button className="flex flex-col items-center justify-center w-full h-full font-bold font-md child hover:scale-110">
            <PlusSquare className="w-1/3 h-1/3" />
            AGREGA UN LIBRO
          </button>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[rgba(0,0,0,.7)] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] overflow-auto focus:outline-none">
          <Dialog.Title className="m-0 text-[20px] font-medium">
            <p> Adiciona un Libro!</p>
            <span>Inserta:</span>
          </Dialog.Title>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const newBooks = [
                {
                  book: {
                    title: newBook.title,
                    pages: newBook.pages ?? 0,
                    genre: newBook.genre ?? "",
                    cover: newBook.cover,
                    synopsis: newBook.synopsis,
                    year: newBook.year ?? 0,
                    // DO NOT DO THIS
                    ISBN: randomID(),
                    author: {
                      name: newBook.authorName,
                      otherBooks: newBook.authorOtherBooks,
                    },
                  },
                },
                ...books,
              ];
              onBooksChange(newBooks);

              resetNewBookState();
              setOpen(false);
            }}
          >
            <AddInputorText
              onChange={(event) => {
                setNewBook({ ...newBook, title: event.target.value });
              }}
              value={newBook.title}
              label="Titulo"
              id="title"
            />
            <div className="grid grid-cols-[2fr,1fr] items-center gap-3">
              <div className="px-2">
                <GenreSelect
                  onChange={(value) => {
                    setNewBook({
                      ...newBook,
                      genre: value,
                    });
                  }}
                  label="Genero"
                  value={newBook.genre}
                  options={genres}
                />
              </div>
              <AddInputorText
                onChange={(event) => {
                  setNewBook({ ...newBook, pages: +event.target.value });
                }}
                value={newBook.pages}
                label="Numero de paginas"
                id="pages"
              />
            </div>
            <AddInputorText
              onChange={(event) => {
                setNewBook({ ...newBook, cover: event.target.value });
              }}
              value={newBook.cover}
              label="Link de la imagen"
              id="cover"
            />
            <AddInputorText
              onChange={(event) => {
                setNewBook({ ...newBook, synopsis: event.target.value });
              }}
              value={newBook.synopsis}
              label="Synopsis"
              id="sypnosis"
              isTextArea={true}
            />
            <div className="grid grid-cols-[2fr,1fr] gap-3">
              <AddInputorText
                onChange={(event) => {
                  setNewBook({ ...newBook, year: +event.target.value });
                }}
                value={newBook.year}
                label="Año"
                id="year"
              />
            </div>
            <AddInputorText
              onChange={(event) => {
                setNewBook({ ...newBook, authorName: event.target.value });
              }}
              value={newBook.authorName}
              label="Autor"
              id="author"
            />
            <AddInputorText
              onChange={(event) => {
                const otherBooks = event.target.value
                  .split(",")
                  .map((value) => value.trim());
                setNewBook({
                  ...newBook,
                  authorOtherBooks: otherBooks,
                });
              }}
              value={newBook.authorOtherBooks.join(", ")}
              label="Otros libros escritos"
              id="otherBooks"
            />
            <div className="mt-3 text-end">
              <Dialog.Close asChild>
                <Button variant="secondary">Cancelar</Button>
              </Dialog.Close>
              <Button type="submit" variant="primary">
                Guardar
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
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
      <p>Filtrar por paginas</p>
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
          className={isGridLayout ? "aspect-[2/3] " : "h-32  object-cover"}
          src={book.book.cover || "https://picsum.photos/200/300"}
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
        <div className="flex gap-10 justify-between items-center flex-wrap">
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
