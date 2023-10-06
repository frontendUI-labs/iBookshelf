import { Minus, Plus, Trash2 } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function SocialButtons({ children }: { children: ReactNode }) {
  return <div className="flex gap-4 text-white">{children}</div>;
}

export default SocialButtons;

export function ButtonsSocials({
  children,
  bg,
  onClick,
}: {
  children: ReactNode;
  bg?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-md p-3 text-base font-medium hover:scale-105 duration-100 ${bg}`}
    >
      {children}
    </button>
  );
}

export function MoreandLessButton({
  gap,
  counter,
  reduceCounter,
  addToCart,
  bookTotalPrice,
}: {
  gap?: string;
  counter: number;
  reduceCounter?: () => void;
  addToCart?: () => void;
  bookTotalPrice?: any;
}) {
  return (
    <div className="flex flex-col justify-between items-end">
      {bookTotalPrice > 0 ? <p>$ {bookTotalPrice} USD</p> : null}
      <div
        className={twMerge(
          "flex items-center gap-4 border border-gray-400 rounded-lg",
          gap
        )}
      >
        <ButtonsSocials onClick={reduceCounter}>
          {counter === 1 ? (
            <Trash2 className="text-orange-500 active:text-orange-500" />
          ) : (
            <Minus className="text-purple-600 active:text-orange-500" />
          )}
        </ButtonsSocials>
        <span className="font-bold">{counter}</span>
        <ButtonsSocials onClick={addToCart}>
          <Plus className="text-purple-600 active:text-green-600" />
        </ButtonsSocials>
      </div>
    </div>
  );
}
