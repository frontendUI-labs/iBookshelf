import { Library } from "../../pages/Home";

const EditInput = ({
  children,
  id,
  value,
  onChange,
}: {
  children: string;
  id: string;
  value: string;
  book: Library;
  onChange: () => void;
  SetValueTitle: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-4 p-3">
      <label htmlFor={id}>{children}</label>
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
