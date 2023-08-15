import { Heart, ShoppingCart, Star } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function HeartIcon({
  color,
  border,
  variant,
  onClick,
}: {
  color: string;
  border: string; // ej. border-purple-600
  variant?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        `h-[60px] w-[60px] border-[1px] ${border} rounded-lg flex items-center justify-center cursor-pointer bg-white`,
        variant === true && "bg-purple-600"
      )}
    >
      <Heart
        className={twMerge(`text-${color}`, variant === true && "text-white")}
      />
    </div>
  );
}

export function CartIcon({ color }: { color: string }) {
  return (
    <div className="h-[60px] w-[60px] border-[1px] border-gray-200 rounded-lg flex items-center justify-center cursor-pointer">
      <ShoppingCart color={color} />
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

export function Rating({ value }: { value: number }) {
  const totalValueRating = 5;
  const realValue = Math.round(value);
  return (
    <div className="flex gap-2 items-center justify-center">
      {Array.from({ length: realValue }).map((_, id) => {
        return <StarIcon variant="active" key={id} />;
      })}
      {Array.from({ length: totalValueRating - realValue }).map((_, id) => {
        return <StarIcon key={id} />;
      })}
    </div>
  );
}
