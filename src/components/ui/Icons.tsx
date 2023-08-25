import { Heart, ShoppingCart, Star } from "lucide-react";
import { twMerge } from "tailwind-merge";
import React from "react";

export function HeartIconHeader({ onClick }: { onClick?: () => void }) {
  return (
    <div
      tabIndex={0}
      onClick={onClick}
      className="h-[60px] w-[60px] border-[1px] border-gray-200 rounded-lg flex items-center justify-center cursor-pointer bg-white outline-purple-600  hover:text-purple-600 focus:text-purple-600 "
    >
      <Heart />
    </div>
  );
}

export function HeartIcon({
  variant,
  onClick,
  bg,
}: {
  bg?: string;
  variant?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      tabIndex={0}
      onClick={onClick}
      className={twMerge(
        `h-[50px] w-[50px] rounded-lg flex items-center justify-center cursor-pointer bg-${bg} text-purple-600 outline-purple-600 hover:text-purple-600 `,
        variant === true && "bg-purple-600 text-white hover:text-white"
      )}
    >
      <Heart />
    </div>
  );
}

export function CartIcon() {
  return (
    <div
      tabIndex={0}
      className="h-[60px] w-[60px] border-[1px] border-gray-200 rounded-lg flex items-center justify-center cursor-pointer bg-white outline-purple-600  hover:text-purple-600 focus:text-purple-600"
    >
      <ShoppingCart />
    </div>
  );
}

export function StarIcon({ variant }: { variant?: string }) {
  return (
    <div>
      <Star
        size={16}
        className={twMerge(
          "text-transparent fill-gray-100",
          variant === "active" && "fill-[#FF754C]"
        )}
      />
    </div>
  );
}

const TOTAL_RATING_VALUE = 5;
export function Rating({
  value,
  setRating,
  isActive,
}: {
  value: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
}) {
  const realValue = Math.round(value);

  return (
    <div
      className={twMerge(
        "flex gap-2 items-center p-1 rounded-lg cursor-pointer",
        "hover:bg-purple-400",
        isActive && "bg-purple-400"
      )}
      onClick={() => {
        setRating(realValue);
      }}
    >
      {Array.from({ length: realValue }).map((_, id) => {
        return <StarIcon variant="active" key={id} />;
      })}
      {Array.from({ length: TOTAL_RATING_VALUE - realValue }).map((_, id) => {
        return <StarIcon key={id} />;
      })}
    </div>
  );
}
