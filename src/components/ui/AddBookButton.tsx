import { useState } from "react";
import { Library } from "../../pages/Home";
import AddInput from "./AddInput";
import * as Dialog from "@radix-ui/react-dialog";
import { PlusSquare } from "lucide-react";
import { randomID } from "../../utils";
import GenreSelect from "./GenreSelect";
import ImgInputChange from "./FileInput";
import Button from "../../common/Button";
// import { randomID } from "../utils";

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
const getGenres = (books: Library[]): string[] => {
  const genres: string[] = [];
  books.forEach((book) => {
    if (!genres.includes(book.book.genre)) {
      genres.push(book.book.genre);
    }
  });
  return genres;
};
export const AddBookButton = ({
  books,
  onBooksChange,
}: {
  books: Library[];
  onBooksChange: (books: Library[]) => void;
}) => {
  const [img, setImg] = useState();

  const [open, setOpen] = useState(false);
  const genres = getGenres(books);
  const [newBook, setNewBook] = useState<NewBookState>(initialAddBookState);
  const [errors, setErrors] = useState({
    title: "",
    pages: "",
    genre: "",
    cover: "",
    synopsis: "",
    year: "",
    ISBN: "",
    authorName: "",
    authorOtherBooks: "",
  });

  const resetNewBookState = () => {
    setNewBook(initialAddBookState);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="w-full h-[80%] bg-[#F2F2F2] border-2 border-[#E6E6E6] parent hover:bg-[#c2c2c2]">
          <button className="flex flex-col items-center justify-center w-full h-full font-bold font-md child hover:scale-110">
            <PlusSquare className="w-1/3 h-1/3" />
            AGREGA UN LIBRO
          </button>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[rgba(0,0,0,.7)] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]  focus:outline-none">
          <Dialog.Title className="m-0 text-[20px] font-medium">
            Agrega un Libro
          </Dialog.Title>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              if (newBook.title === "") {
                setErrors({ ...errors, title: "Campo requerido" });
                return;
              }

              if (newBook.title.length <= 10) {
                setErrors({ ...errors, title: "Minimo 10 caracteres" });
                return;
              }

              const newBooks = [
                {
                  book: {
                    title: newBook.title,
                    pages: newBook.pages ?? 0,
                    genre: newBook.genre ?? "",
                    cover: img,
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
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}

              <div className="grid grid-cols-[1fr,1fr] items-center gap-3">
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
                <AddInput
                  onChange={(event) => {
                    setNewBook({ ...newBook, authorName: event.target.value });
                  }}
                  value={newBook.authorName}
                  label="Autor"
                  id="author"
                  placeholder="Ej. J. K. Rowling"
                />
              </div>
              <ImgInputChange
                id="imgInput"
                actualImg={img}
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (!file) return;
                  const imgUrl = URL.createObjectURL(file);
                  const newImage = new Image();
                  console.log(newImage, "newImage");

                  setImg(imgUrl);
                }}
              />
              <AddInput
                onChange={(event) => {
                  setNewBook({ ...newBook, synopsis: event.target.value });
                }}
                value={newBook.synopsis}
                label="Synopsis"
                id="sypnosis"
                isTextArea={true}
                placeholder="Ej. Harry Potter y la piedra filosofal, es el primer libro..."
              />

              <div className="grid grid-cols-[1fr,1fr] gap-3">
                <AddInput
                  onChange={(event) => {
                    setNewBook({ ...newBook, pages: +event.target.value });
                  }}
                  value={newBook.pages}
                  label="Numero de paginas"
                  id="pages"
                  placeholder="Ej. 1234"
                />

                <AddInput
                  onChange={(event) => {
                    setNewBook({ ...newBook, year: +event.target.value });
                  }}
                  value={newBook.year}
                  label="Año"
                  id="year"
                  placeholder="Ej. 2023"
                />
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
                Guardar
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
