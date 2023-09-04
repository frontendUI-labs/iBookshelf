import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "danger" | "secondary" | "icon";
  type?: "button" | "submit";
  id?: string;
};
const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  type,
  id,
}) => {
  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={twMerge(
        "flex items-center justify-center gap-2 rounded-md p-6 text-base font-medium h-[30px]",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-neutral-800 focus:outline-purple-600 focus:ring-2 w-[inherit] text-center ",
        "hover:scale-105 duration-100 focus:scale-110 m-2",
        variant === "primary" && "text-[rgb(250_250_250)] bg-purple-600",
        variant === "secondary" && "text-purple-600 bg-purple-400",
        variant === "danger" && "text-[rgb(250_250_250)] bg-[rgb(239_68_68)]",
        variant === "icon" &&
          "bg-none text-purple-600 text-left justify-start p-0"
      )}
    >
      {children}
    </button>
  );
};
export default Button;
