import * as Dialog from "@radix-ui/react-dialog";
import { Heart, HeartCrack, X, XCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useAppContext } from "../../bookContext/AppContext";

const EmptyDialog = () => {
  return (
    <div className="flex flex-col gap-8 text-purple-700 items-center">
      <HeartCrack size={70} />
      <h3 className="text-center text-lg ">
        Aún no tienes libros favoritos. ¡Comienza a agregarlos ahora mismo!
      </h3>
    </div>
  );
};

const FavoriteDialog = () => {
  const [open, setOpen] = useState(false);
  const { getfavoriteBooks, favoriteBooks } = useAppContext();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="h-[60px] w-[60px] border-[1px] flex items-center justify-center cursor-pointer bg-white relative border-gray-200 rounded-lg  outline-purple-600  hover:text-purple-600 focus:text-purple-600">
          <button>
            <Heart />
          </button>
          {favoriteBooks.length > 0 && (
            <div className="absolute w-[28px] h-[28px] bg-orange-400 -top-4 -right-4 p-3 text-white font-semibold rounded-full flex items-center justify-center">
              {favoriteBooks.length}
            </div>
          )}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" bg-black/30 z-30 opacity-100 backdrop-blur-[5px] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="font-heading z-40 border-l backdrop-blur-3xl bg-gray-300 opacity-95 text-black  fixed top-[50%] right-0 h-full w-[90vw] max-w-[450px] translate-y-[-50%] rounded-[6px] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 text-2xl font-semibold">
            My Favorite List
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Your favorite books
          </Dialog.Description>
          <div className="h-[85%] flex flex-col justify-between pb-20 overflow-auto ">
            <ul className="flex flex-col gap-2">
              {favoriteBooks.length > 0 ? (
                favoriteBooks.map((book, id) => (
                  <li
                    key={id}
                    className="flex w-full flex-col border-b border-neutral-300"
                  >
                    <div className="relative w-full flex gap-2 justify-between  p-4 hover:bg-gray-200 group  rounded-xl group duration-500">
                      <button
                        onClick={() => {
                          getfavoriteBooks(book);

                          // removeBook(book.id);
                        }}
                        className="absolute hidden right-0 top-0 group-hover:block"
                      >
                        <XCircle className="fill-gray-400" />
                      </button>
                      <div className="flex gap-6 ">
                        <img
                          className="min-w-[80px] max-h-[100px]"
                          src={book.cover}
                          alt=""
                        />
                        <div className="flex flex-col justify-between text-base">
                          <p className="line-clamp-2">{book.title}</p>
                          <Link
                            onClick={() => {
                              setOpen(false);
                            }}
                            to={"/filter/biography"}
                          >
                            <span className="uppercase text-purple-600">
                              {book.categorySlug ?? "BUSINESS"}
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-center justify-center">
                          <button
                            className={twMerge(
                              "h-[60px] w-[60px] border border-purple-600 rounded-lg  flex items-center justify-center cursor-pointer bg-purple-600 text-white outline-purple-600"
                            )}
                          >
                            <Heart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <EmptyDialog />
              )}
            </ul>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[25px] right-[20px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FavoriteDialog;
