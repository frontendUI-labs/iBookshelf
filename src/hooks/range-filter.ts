import { useEffect, useState } from "react";
import { Book } from "../types/type";

const usePriceRangeBooks = (books: Book[]) => {
  const [range, setRange] = useState([6, 16]);

  const allPrices = books.map((book) => book.price);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  const priceRange = [Math.floor(minPrice), Math.floor(maxPrice) + 1];

  const priceRangeBooks = books.filter((book) => {
    const initialValue = range[0];
    const finalValue = range[1];

    return book.price >= initialValue && book.price <= finalValue;
  });

  return { priceRangeBooks, priceRange, setRange };
};

export default usePriceRangeBooks;
