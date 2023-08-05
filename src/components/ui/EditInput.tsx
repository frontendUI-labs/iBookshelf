import { Library } from "../../pages/Home";

const EditInput = ({
  children,
  id,
  value,
  SetValueTitle,
}: {
  children: string;
  id: string;
  value: string;
  book: Library;
  SetValueTitle: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-4 p-3">
      <label htmlFor={id}>{children}</label>
      <input
        onChange={(event) => {
          SetValueTitle(event.target.value);
        }}
        className="border-2 border-neutral-700 p-3 rounded-md"
        type="text"
        id={id}
        value={value}
      />
    </div>
  );
};
export default EditInput;
