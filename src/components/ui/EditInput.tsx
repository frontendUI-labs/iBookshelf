import React from "react";

const EditInput = ({
  label,
  id,
  value,
  onChange,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-4 p-3">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={onChange}
        className="border-2 border-neutral-700 p-3 rounded-md"
        type="text"
        id={id}
        value={value}
      />
    </div>
  );
};
export default EditInput;
