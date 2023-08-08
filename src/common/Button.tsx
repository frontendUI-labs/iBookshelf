import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "danger" | "secondary";
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      type={type}
      id={id}
=======
>>>>>>> 393d1fd (create new book)
=======
>>>>>>> 53fa306 (create new book)
=======
      type={type}
      id={id}
>>>>>>> ebfdcd0 (fix:rebase)
      onClick={onClick}
      className={twMerge(
        "inline-flex items-center rounded-md px-4 text-base font-medium h-9",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-neutral-800 focus:outline-none focus:ring-2",
        "hover:scale-105 duration-100 focus:scale-110 m-2",
        variant === "primary" && "text-[rgb(250_250_250)] bg-[rgb(24_24_27)]",
        variant === "secondary" &&
          "text-[rgb(24_24_27)] bg-[rgba(228_228_231)]",
        variant === "danger" && "text-[rgb(250_250_250)] bg-[rgb(239_68_68)]"
      )}
    >
      {children}
    </button>
  );
};
export default Button;
