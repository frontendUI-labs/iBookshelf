const TextAreaInput = ({ textArea }) => {
  return (
    <div>
      <label htmlFor="synopsis"></label>
      <textarea className="w-full" cols="2" rows="4" id="synopsis">
        {textArea}
      </textarea>
    </div>
  );
};

export default TextAreaInput;
