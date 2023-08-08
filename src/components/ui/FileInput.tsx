const ImgInputChange = ({
  id,
  onChange,
  // inputRef,
  actualImg,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  // inputRef: HTMLElement;
  actualImg: string;
}) => {
  return (
    <div className="flex flex-col gap-4 p-3">
      <label htmlFor={id}>Nueva Imagen</label>
      <input
        className="custom-file-input"
        id={id}
        type="file"
        accept="image/jpg,image/jpeg, image/png"
        onChange={onChange}
        multiple
      />
      <img width={200} height={200} id="prevImage" src={actualImg} alt="" />
    </div>
  );
};
export default ImgInputChange;
