import * as Dialog from "@radix-ui/react-dialog";
import { CartIcon } from "./Icons";
import { ShoppingCart, X, XCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MoreandLessButton } from "./SocialButtons";
import { Book } from "../../types/book";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeAndDecrementBook,
  removeBook,
} from "../../redux/cartSlice";

function BookCartDialog() {
  const cartBooks: Book[] = useSelector((state) => state.cart.cartBooks);

  const dispatch = useDispatch();

  const handleAddToCart = (book: Book) => {
    dispatch(addToCart(book));
  };

  const handleRemoveAndDecrement = (book: Book) => {
    dispatch(removeAndDecrementBook(book));
  };

  const handleRemove = (book: Book) => {
    dispatch(removeBook(book));
  };

  const totalPrice = cartBooks.reduce((acc, currentValue) => {
    return (
      acc +
      (currentValue.price -
        currentValue.price * currentValue.discountPercentage) *
        currentValue.quantity
    );
  }, 0);
  const taxesPrice = totalPrice * 0.18;

  return (
    <div className="h-full flex flex-col justify-between pb-20">
      <ul className="flex flex-col gap-2 overflow-y-auto">
        {[
          cartBooks.length > 0 ? (
            cartBooks.map((book: Book, idx) => {
              const priceOfQtY = (
                (book.price - book.price * book.discountPercentage) *
                book.quantity
              ).toFixed(2);
              function setOpen(_arg0: boolean) {
                throw new Error("Function not implemented.");
              }
              return (
                <li
                  key={idx}
                  className="flex w-full flex-col border-b border-neutral-300"
                >
                  <div className="relative w-full flex gap-2 justify-between py-4 group  hover:bg-neutral-200">
                    <button
                      className="absolute left-20 top-0"
                      onClick={() => handleRemove(book)}
                    >
                      <XCircle className="hidden fill-gray-400 hover:text-orange-600 group-hover:block" />
                    </button>
                    <div className="flex gap-6 ">
                      <Link
                        to={`/details/${book.slug}`}
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <img
                          className="min-w-[80px] max-h-[100px] "
                          src={book.cover}
                          alt=""
                        />
                      </Link>

                      <div className="flex flex-col justify-between text-base">
                        <Link
                          to={`/details/${book.slug}`}
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <p className="line-clamp-2 hover:text-purple-600">
                            {book.title}
                          </p>
                        </Link>
                        <Link
                          to={`/filter/${book.categorySlug}`}
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <span className="uppercase text-purple-600 hover:text-orange-600">
                            {book.categorySlug}
                          </span>
                        </Link>
                      </div>
                    </div>
                    <MoreandLessButton
                      bookTotalPrice={priceOfQtY}
                      counter={book.quantity}
                      addToCart={() => {
                        handleAddToCart(book);
                      }}
                      reduceCounter={() => {
                        handleRemoveAndDecrement(book);
                      }}
                      gap="gap-0"
                    ></MoreandLessButton>
                  </div>
                </li>
              );
            })
          ) : (
            <div className="mt-10 flex flex-col items-center gap-10 font-heading overflow-hidden font-bold text-3xl">
              <ShoppingCart className="w-14 h-14" />
              <p className="">Your cart is empty!</p>
            </div>
          ),
        ]}
      </ul>
      <div className="flex flex-col gap-3 text-lg ">
        <div className="flex justify-between border-b-[1px] border-gray-200 py-2">
          Taxes <span>$ {taxesPrice.toFixed(2)} USD</span>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-200 py-2">
          TOTAL <span>$ {totalPrice.toFixed(2)} USD</span>
        </div>
        <Dialog.Close asChild>
          <button className="bg-orange-600 w-full text-white px-10 text-xl rounded-md font-semibold py-4 hover:scale-105 duration-300 focus:outline-none">
            Proceed to Checkout
          </button>
        </Dialog.Close>
      </div>
    </div>
  );
}

const DialogCart = () => {
  const cartBooks: Book[] = useSelector((state) => state.cart.cartBooks);
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="relative h-[60px] w-[60px] border-[1px] border-gray-200 rounded-lg flex items-center justify-center cursor-pointer bg-white outline-purple-600  hover:text-purple-600 focus:text-purple-600">
          <CartIcon />
          {cartBooks.length > 0 ? (
            <div className="w-8 h-8 rounded-full flex justify-center items-center poppins text-xs font-bold text-white xl:text-base bg-orange-400 absolute -top-1/4 -right-1/4">
              {cartBooks.length}
            </div>
          ) : (
            ""
          )}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" bg-black/30 z-30 opacity-100 backdrop-blur-[5px] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="font-heading z-40 border-l backdrop-blur-3xl bg-gray-300 opacity-95 text-black  fixed top-[50%] right-0 h-full w-[90vw] max-w-[450px] translate-y-[-50%] rounded-l-[10px] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 text-2xl font-semibold">
            My Cart
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Continue Shopping.
          </Dialog.Description>
          <BookCartDialog />
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
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

export default DialogCart;
