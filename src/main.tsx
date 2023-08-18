import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/tailwind.css";
// import { Contact } from "lucide-react";
import Header from "./components/layout/header.tsx";
import Footer from "./components/ui/Footer.tsx";
// import { Link } from "react-router-dom";

// function NavLink() {
//   return (
//     <div className="flex gap-2">
//       <Link to="/" className="text-red-500 underline">
//         Home
//       </Link>
//       <Link to="/filter" className="text-red-500 underline">
//         FilterPage
//       </Link>
//       <Link to="/details" className="text-red-500 underline">
//         DetailsPage
//       </Link>
//       <Link to="/details" className="text-red-500 underline">
//         PaymentPage
//       </Link>
//     </div>
//   );
// }
const rootElement = document.querySelector("#root") as Element;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      {/* <NavLink /> */}
      <Header />
      <App />
      <Footer />
    </React.StrictMode>
  );
}
