import { Link } from "react-router-dom";

function Payment() {
  return (
    <>
      <div className="flex gap-2">
        <Link to="/" className="text-red-500 underline">
          Home
        </Link>
        <Link to="/filter" className="text-red-500 underline">
          FilterPage
        </Link>
        <Link to="/details" className="text-red-500 underline">
          DetailsPage
        </Link>
        <Link to="/payment" className="text-red-500 underline">
          PaymentPage
        </Link>
      </div>
      <div>payment page</div>
    </>
  );
}
export default Payment;
