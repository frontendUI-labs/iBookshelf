import { Link } from "@tanstack/router";

function Home() {
  return (
    <>
      <Link to="/filter" className="text-red-500 underline">
        FilterPage
      </Link>
      <p className="bg-black text-xl text-white">HOLAAAAAA</p>
    </>
  );
}

export default Home;
