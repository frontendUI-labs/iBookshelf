import React from "react";

const AddInput = ({
  label,
  id,
  value,
  onChange,
  isTextArea = false,
}: {
  label: string;
  id: string;
  value: string | number | undefined;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  isTextArea?: boolean;
}) => {
  return (
    <div className="w-full flex flex-col gap-2 p-2">
      <label htmlFor={id}>{label}</label>
      {isTextArea ? (
        <textarea
          className="border-2 p-3 rounded-md hover:border-indigo-600"
          name="textarea"
          id={id}
          value={value}
          rows={5}
          cols={8}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
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
export default AddInput;
