import { Link } from "react-router-dom";

function Details() {
  return (
    <>
      <Link to="/details" className="text-red-500 underline">
        favorites
      </Link>
      <div>Details page</div>
    </>
  );
}
export default Details;
