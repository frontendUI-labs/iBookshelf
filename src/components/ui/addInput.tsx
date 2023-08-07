const AddInput = ({
  children,
  id,
  value,
  SetAddTitle,
}: {
  children: string;
  id: string;
  value: string;
  SetAddTitle: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-4 p-3">
      <label htmlFor={id}>{children}</label>
      <input
        onChange={(event) => {
          SetAddTitle(event.target.value);
        }}
        className="border-2 p-3 rounded-md hover:border-indigo-600"
        type="text"
        id={id}
        value={value}
      />
    </div>
  );
};
export default AddInput;
