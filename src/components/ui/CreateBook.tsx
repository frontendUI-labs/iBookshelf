import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import Button from "../../common/Button";
import EditInput from "./EditInput";
import { Library } from "../../pages/Home";
import ImgInputChange from "./FileInput";
import GenreSelect from "./GenreSelect";

const getGenres = (books: Library[]): string[] => {
  const genres: string[] = [];
  books.forEach((book) => {
    if (!genres.includes(book.book.genre)) {
      genres.push(book.book.genre);
    }
  });
  return genres;
};
const CreateBookButton = ({
  books,
  addNewBooks,
}: {
  books: Library[];
  addNewBooks: (books: Library[]) => void;
}) => {
  const genres = getGenres(books);
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState();
  const [bookDetails, setBookDetails] = useState({
    title: "",
    pages: 0,
    genre: "",
    cover: "",
    synopsis: "",
    year: 0,
    ISBN: "",
  });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="items-center justify-center  rounded-full bg-black p-3 font-medium leading-none right-0 top-12 focus:shadow-[0_0_0_2px]   focus:outline-none">
          <Plus color="white" aria-label="Crear libro" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[rgba(0,0,0,.7)] data-[state=open]:animate-overlayShow fixed inset-0 " />
        <Dialog.Content className=" overflow-y-auto data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 text-[20px] font-medium">
            Agrega tu Libro
          </Dialog.Title>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const newBook = {
                book: {
                  title: bookDetails.title,
                  pages: bookDetails.pages,
                  genre: bookDetails.genre,
                  cover: img,
                  synopsis: bookDetails.synopsis,
                  year: bookDetails.year,
                  ISBN: bookDetails.ISBN,
                  author: {
                    name: "J.R.R. Tolkien",
                    otherBooks: ["El Hobbit", "El Silmarillion"],
                  },
                },
              };
              const addBook = [newBook, ...books];
              addNewBooks(addBook);
              setOpen(false);
            }}
          >
            <EditInput
              onChange={(event) => {
                setBookDetails({
                  ...bookDetails,
                  title: event.target.value,
                });
              }}
              value={bookDetails.title}
              label="Titulo"
              id="title"
              placeholder="Harry Potter y la piedra filosofal"
            />
            <EditInput
              onChange={(event) => {
                setBookDetails({
                  ...bookDetails,
                  pages: Number.parseInt(event.target.value),
                });
              }}
              value={bookDetails.pages}
              label="Pagínas"
              id="pages"
              placeholder={223}
            />
            <div className="gap-4 p-3">
              <GenreSelect
                onChange={(event) => {
                  setBookDetails({
                    ...bookDetails,
                    genre: event,
                  });
                }}
                label="Generos"
                value={bookDetails.genre}
                options={genres}
              />
            </div>

            <ImgInputChange
              actualImg={img}
              id="ImgInput"
              onChange={(event) => {
                const file = URL.createObjectURL(event.target.files[0]);
                setImg(file);
              }}
            />

            <EditInput
              onChange={(event) => {
                setBookDetails({
                  ...bookDetails,
                  synopsis: event.target.value,
                });
              }}
              value={bookDetails.synopsis}
              label="Synopsis"
              id="synopsis"
              placeholder="Un niño descubre que es un mago y comienza una..."
            />
            <EditInput
              onChange={(event) => {
                setBookDetails({
                  ...bookDetails,
                  year: Number.parseInt(event.target.value),
                });
              }}
              value={bookDetails.year}
              label="Año"
              id="año"
              placeholder={2023}
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
export default CreateBookButton;
