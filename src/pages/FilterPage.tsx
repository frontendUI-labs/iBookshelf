import { Link } from "@tanstack/router";

function Filter() {
  return (
    <>
      <Link to="/" className="text-red-500 underline">
        home
      </Link>
      <p className="bg-black text-xl text-white">PAGEFILTER</p>
    </>
  );
}

export default Filter;
