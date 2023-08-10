import { useState } from "react";
import { Library } from "../../pages/Home";
import AddInput from "./AddInput";
import * as Dialog from "@radix-ui/react-dialog";
import { PlusSquare, XSquare } from "lucide-react";
import { randomID } from "../../utils";
import GenreSelect from "./GenreSelect";
import ImgInputChange from "./FileInput";
import Button from "../../common/Button";
import {
  validateIfEmpty,
  validateIfStringLength,
} from "../utils/validate-forms.ts";

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
type AddBookErrorState = {
  title: string;
  pages: string;
  genre: string;
  cover: string;
  synopsis: string;
  year: string;
  ISBN: string;
  authorName: string;
  authorOtherBooks: string;
};
const initialAddBookErrorState: AddBookErrorState = {
  title: "",
  pages: "",
  genre: "",
  cover: "",
  synopsis: "",
  year: "",
  ISBN: "",
  authorName: "",
  authorOtherBooks: "",
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

type ErrorMessageProps = {
  inputName: keyof AddBookErrorState;
  errors: AddBookErrorState;
};
function ErrorMessage({ inputName, errors }: ErrorMessageProps) {
  const error = errors[inputName];
  return error && <p className="text-red-500 text-sm px-3">{error}</p>;
}

function validateAddBookForm(newBook: NewBookState) {
  return {
    ...initialAddBookErrorState,
    title: validateIfEmpty(newBook.title, "Title"),
    authorName: validateIfEmpty(newBook.authorName, "Author Name"),
    pages: validateIfEmpty(newBook.pages, "Pages"),
    cover: validateIfEmpty(newBook.cover, "Cover"),
    year: validateIfEmpty(newBook.year, "Year"),
    genre: validateIfEmpty(newBook.genre, "Genre"),
    synopsis: validateIfStringLength(newBook.synopsis, 30, "Synopsis"),
  };
}

export const AddBookButton = ({
  books,
  onBooksChange,
}: {
  books: Library[];
  onBooksChange: (books: Library[]) => void;
}) => {
  // const [img, setImg] = useState("");
  const [open, setOpen] = useState(false);
  const genres = getGenres(books);
  const [newBook, setNewBook] = useState<NewBookState>(initialAddBookState);
  const [errors, setErrors] = useState<AddBookErrorState>(
    initialAddBookErrorState
  );

  const resetNewBookState = () => {
    setNewBook(initialAddBookState);
    setErrors(initialAddBookErrorState);
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        resetNewBookState();
      }}
    >
      <Dialog.Trigger asChild>
        <div className="w-full h-[80%] bg-[#F2F2F2] border-2 border-[#E6E6E6] parent hover:bg-[#c2c2c2]">
          <button className="flex flex-col items-center justify-center w-full h-full font-bold font-md child hover:scale-110">
            <PlusSquare className="w-1/3 h-1/3" />
            AGREGAR LIBRO
          </button>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[rgba(0,0,0,.7)] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]  focus:outline-none">
          <Dialog.Close asChild>
            <button className="absolute top-2 right-2 hover:bg-black hover:text-white">
              <XSquare />
            </button>
          </Dialog.Close>
          <Dialog.Title className="m-0 text-[20px] font-medium text-center">
            Inserta
          </Dialog.Title>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const allErrors = validateAddBookForm(newBook);
              setErrors(allErrors);

              const hasError = Object.values(allErrors).some(
                (message) => message !== ""
              );
              if (hasError) return;

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
              setOpen(false);
            }}
          >
            <div className=" overflow-auto max-h-[65vh]">
              <AddInput
                onChange={(event) => {
                  setErrors({ ...errors, title: "" });
                  setNewBook({ ...newBook, title: event.target.value });
                }}
                value={newBook.title}
                label="Titulo"
                id="title"
                placeholder="Ej. Harry Potter y la piedra filosofal"
              />
              <ErrorMessage inputName="title" errors={errors} />
              <div className="grid grid-cols-[1fr,1fr] items-center gap-3">
                <div className="px-2">
                  <GenreSelect
                    onChange={(value) => {
                      setErrors({ ...errors, genre: "" });
                      setNewBook({
                        ...newBook,
                        genre: value,
                      });
                    }}
                    label="Genero"
                    value={newBook.genre}
                    options={genres}
                  />
                  <ErrorMessage inputName="genre" errors={errors} />
                </div>
                <div>
                  <AddInput
                    onChange={(event) => {
                      setErrors({ ...errors, authorName: "" });
                      setNewBook({
                        ...newBook,
                        authorName: event.target.value,
                      });
                    }}
                    value={newBook.authorName}
                    label="Autor"
                    id="author"
                    placeholder="Ej. J. K. Rowling"
                  />
                  <ErrorMessage inputName="authorName" errors={errors} />
                  {/* {errors.authorName && (
                    <p className="text-red-500 text-sm px-3">
                      {errors.authorName}
                    </p>
                  )} */}
                </div>
              </div>
              <div>
                <ImgInputChange
                  id="imgInput"
                  actualImg={newBook.cover}
                  onChange={(event) => {
                    setErrors({ ...errors, cover: "" });

                    const file = event.target.files?.[0];
                    if (!file) return;
                    const imgUrl = URL.createObjectURL(file);
                    const imgElement = new Image();
                    imgElement.src = imgUrl;
                    imgElement.addEventListener("load", () => {
                      if (imgElement.width > 1000 || imgElement.height > 1000) {
                        setErrors({
                          ...errors,
                          cover:
                            "Imagen muy grande, debe ser como max 1000 x 1000",
                        });
                        return;
                      }
                      setNewBook({
                        ...newBook,
                        cover: imgUrl,
                      });
                    });
                  }}
                />
                <ErrorMessage inputName="cover" errors={errors} />
              </div>

              <AddInput
                onChange={(event) => {
                  setErrors({ ...errors, synopsis: "" });
                  setNewBook({ ...newBook, synopsis: event.target.value });
                }}
                value={newBook.synopsis}
                label="Synopsis"
                id="synopsis"
                isTextArea={true}
                placeholder="Ej. Harry Potter y la piedra filosofal, es el primer libro..."
              />
              <ErrorMessage inputName="synopsis" errors={errors} />
              <div className="grid grid-cols-[1fr,1fr] gap-3">
                <div>
                  <AddInput
                    onChange={(event) => {
                      setErrors({ ...errors, pages: "" });
                      setNewBook({ ...newBook, pages: +event.target.value });
                    }}
                    value={newBook.pages}
                    label="Numero de paginas"
                    id="pages"
                    placeholder="Ej. 1234"
                  />
                  <ErrorMessage inputName="pages" errors={errors} />
                </div>
                <div>
                  <AddInput
                    onChange={(event) => {
                      setErrors({ ...errors, year: "" });
                      setNewBook({ ...newBook, year: +event.target.value });
                    }}
                    value={newBook.year}
                    label="Año"
                    id="year"
                    placeholder="Ej. 2023"
                  />
                  <ErrorMessage inputName="year" errors={errors} />
                </div>
              </div>
              <AddInput
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
                placeholder="Ej. Harry Potter y la cámara secreta, Harry Potter y el prisionero de Azkaban"
              />
            </div>
            <div className="mt-3 text-end">
              <Dialog.Close asChild>
                <Button variant="secondary">Cancelar</Button>
              </Dialog.Close>
              <Button type="submit" variant="primary">
                Agregar
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
