import { useState } from "react";
import Button from "../../common/Button";
import { Library } from "../../pages/Home";
import EditInput from "./EditInput";
import * as Dialog from "@radix-ui/react-dialog";
import { Pencil } from "lucide-react";
import ImgInputChange from "./FileInput";

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
  const [authorName, setAuthorName] = useState(book.book.author.name);
  const [img, setImg] = useState(book.book.cover);
  const [imgError, setImgError] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="hidden group-hover:block absolute items-center justify-center  rounded-[4px] bg-white p-1 font-medium leading-none right-0 top-12 focus:shadow-[0_0_0_2px]   focus:outline-none">
          <Pencil color="black" aria-label="Editar libro" />{" "}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[rgba(0,0,0,.7)] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className=" overflow-y-auto data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
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
            <ImgInputChange
              actualImg={img}
              id="ImgInput"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) return;
                if (file.size > 1024) {
                  setImgError(true);
                  return;
                }
                const imgUrl = URL.createObjectURL(file);
                setImg(imgUrl);
              }}
            />

            {imgError && (
              <p className="text-red-500 text-sm">
                La imagen debe ser menor a 1mb
              </p>
            )}

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
