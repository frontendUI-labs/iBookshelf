import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

const AddInput = ({
  label,
  id,
  value,
  onChange,
  isTextArea = false,
  placeholder,
}: {
  label: string;
  id: string;
  value: string | number | undefined;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  isTextArea?: boolean;
  placeholder: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-2 p-2">
      <label htmlFor={id}>{label}</label>
      {isTextArea ? (
        <textarea
          className="border-2 p-3 rounded-md hover:border-indigo-600"
          name="textarea"
          placeholder={placeholder}
          id={id}
          value={value}
          rows={3}
          cols={8}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          placeholder={placeholder}
          onChange={onChange}
          className="border-2 p-3 rounded-md hover:border-indigo-600"
          type="text"
          id={id}
          value={value}
        />
      )}
    </div>
  );
};

export function CheckBoxInput({
  onChange,
  genre,
}: {
  onChange?: () => void;
  genre: string;
}) {
  return (
    <div onChange={onChange} className="flex items-center gap-2 p-2">
      <Checkbox.Root
        value={genre}
        className="shadow-blackA7 hover:bg-violet3 flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px] bg-white border-2 boder-gray-100 outline-none focus:shadow-[0_0_0_2px_black]  cursor-pointer "
        id={genre}
      >
        <Checkbox.Indicator className="text-violet11 bg-purple-600 w-full h-full flex items-center justify-center rounded-[4px]">
          <CheckIcon className=" text-white " size={8} strokeWidth={4} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        className="pl-[15px] text-[13px] leading-none text-black font-bold cursor-pointer "
        htmlFor={genre}
      >
        {genre}
      </label>
    </div>
  );
}
export default AddInput;
