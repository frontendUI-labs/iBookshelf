import { ShoppingCart } from "lucide-react";
import { twMerge } from "tailwind-merge";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../App";

function CartButton({
  text,
  onClick,
  bg,
}: {
  text: string;
  bg?: string;
  onClick?: any;
}) {
  return (
    <>
      <button
        onClick={() => {
          onClick();
          showToast();
        }}
        className={twMerge(
          "bg-purple-600 py-3 px-12 rounded-xl flex items-center justify-center gap-4 text-white boxShadow group hover:scale-105 duration-300",
          text.length < 5 && "gap-3 px-4 py-3",
          bg
        )}
      >
        <ShoppingCart className="group-hover:scale-110" />
        <span className="text-lg font-semibold">{text}</span>
      </button>
    </>
  );
}
export default CartButton;
