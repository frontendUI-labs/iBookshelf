import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CartIcon } from "./Icons";
import { X, XCircle } from "lucide-react";
import { MoreandLessButton } from "./SocialButtons";

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="h-[60px] w-[60px] border-[1px] border-gray-200 rounded-lg flex items-center justify-center cursor-pointer bg-white outline-purple-600  hover:text-purple-600 focus:text-purple-600">
        <CartIcon />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className=" bg-black/30 z-30 opacity-100 backdrop-blur-[5px] data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="font-heading z-40 border-l backdrop-blur-3xl bg-gray-300 opacity-95 text-black  fixed top-[50%] right-0 h-full w-[90vw] max-w-[450px] translate-y-[-50%] rounded-[6px] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="m-0 text-2xl font-semibold">
          My Cart
        </Dialog.Title>
        <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          Continue Shopping.
        </Dialog.Description>
        <div className="h-full flex flex-col justify-between pb-20">
          <ul className="flex flex-col gap-2">
            <li className="flex w-full flex-col border-b border-neutral-300">
              <div className="relative w-full flex gap-2 justify-between px-1 py-4">
                <button className="absolute left-20 top-0">
                  <XCircle className="fill-gray-400" />
                </button>
                <div className="flex gap-6">
                  <img
                    className="min-w-[80px] max-h-[100px]"
                    src="/images/coverOne.png"
                    alt=""
                  />
                  <div className="flex flex-col justify-between text-base">
                    <p className="line-clamp-2">
                      Tent for Seven: A Camping Adventure Gone South Out West
                    </p>
                    <span className="uppercase text-purple-600">Biography</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <span>$135.00 USD</span>
                  <MoreandLessButton gap="gap-[2px]" />
                </div>
              </div>
            </li>
            <li className="flex w-full flex-col border-b border-neutral-300">
              <div className="relative w-full flex gap-2 justify-between px-1 py-4">
                <button className="absolute left-20 top-0">
                  <XCircle className="fill-gray-400" />
                </button>
                <div className="flex gap-6">
                  <img
                    className="min-w-[80px] max-h-[100px]"
                    src="/images/coverTwo.png"
                    alt=""
                  />
                  <div className="flex flex-col justify-between text-base">
                    <p className="line-clamp-2">Tent for Seven</p>
                    <span className="uppercase text-purple-600">Biography</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <span>$135.00 USD</span>
                  <MoreandLessButton gap="gap-[2px]" />
                </div>
              </div>
            </li>
            <li className="flex w-full flex-col border-b border-neutral-300">
              <div className="relative w-full flex gap-2 justify-between px-1 py-4">
                <button className="absolute left-20 top-0">
                  <XCircle className="fill-gray-400" />
                </button>
                <div className="flex gap-6">
                  <img
                    className="min-w-[80px] max-h-[100px]"
                    src="/images/coverThree.png"
                    alt=""
                  />
                  <div className="flex flex-col justify-between text-base">
                    <p className="line-clamp-2">
                      The 7 Habits of Highly Effective People: Infographics
                      Edition: Powerful Lessons in Personal Change
                    </p>
                    <span className="uppercase text-purple-600">Biography</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <span>$135.00 USD</span>
                  <MoreandLessButton gap="gap-[2px]" />
                </div>
              </div>
            </li>
          </ul>
          <div className="flex flex-col gap-3 text-lg ">
            <div className="flex justify-between border-b-[1px] border-gray-200 py-2">
              Taxes <span>$0.00 USD</span>
            </div>
            <div className="flex justify-between border-b-[1px] border-gray-200 py-2">
              TOTAL <span>$135.00 USD</span>
            </div>
            <Dialog.Close asChild>
              <button className="bg-orange-600 w-full text-white px-10 text-xl rounded-md font-semibold py-4 hover:scale-105 duration-300 focus:outline-none">
                Proceed to Checkout
              </button>
            </Dialog.Close>
          </div>
        </div>
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

export default DialogDemo;
