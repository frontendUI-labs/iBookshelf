import React from "react";
import { twMerge } from "tailwind-merge";

type LayoutTypeInputProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  isChecked: boolean;
  icon: React.ReactNode;
};

function LayoutTypeInput({
  label,
  value,
  onChange,
  id,
  icon,
  isChecked,
}: LayoutTypeInputProps) {
  return (
    <>
      <label
        htmlFor={id}
        className={twMerge(
          "flex items-center justify-center w-10 h-10 bg-[#f2f2f2] rounded-full cursor-pointer",
          "transition-colors duration-100",
          "hover:bg-[#e6e6e6]",
          isChecked && "bg-neutral-900 text-white hover:bg-neutral-800"
        )}
      >
        <span className="sr-only">{label}</span>
        {icon}
      </label>
      <input
        className="hidden"
        onChange={onChange}
        type="radio"
        name="layout"
        id={id}
        value={value}
      />
    </>
  );
}
export default LayoutTypeInput;
