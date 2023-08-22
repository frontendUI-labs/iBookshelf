import { ShoppingCart } from "lucide-react";
import { twMerge } from "tailwind-merge";

function CartButton({ text }: { text: string }) {
  return (
    <>
      <button
        className={twMerge(
          "bg-purple-600 py-3 px-12 rounded-xl flex items-center gap-4 text-white group hover:bg-red-500",
          text.length < 5 && "gap-3 px-4 py-3"
        )}
      >
        <ShoppingCart className="group-hover:scale-110" />
        <span className="text-lg font-semibold group-hover:scale-105">
          {text}
        </span>
      </button>
    </>
  );
}

export default CartButton;
