import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../types/book";

export type CartBook = Book & {
  quantity: number;
};

export type CartState = {
  cartBooks: Book[];
};

const initialState: CartState = {
  cartBooks: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newState = [...state.cartBooks];
      console.log(state, "state");

      const selectedBookIdx = newState.findIndex((book) => {
        return book.id === action.payload.id;
      });
      console.log(action.payload, "book");

      const bookSelected = newState[selectedBookIdx] as Book;
      console.log(bookSelected, "select");

      if (selectedBookIdx < 0) {
        state.cartBooks = [...newState, { ...action.payload, quantity: 1 }];
      } else {
        const addBook = {
          ...bookSelected,
          quantity: bookSelected.quantity + 1,
        };

        state.cartBooks = [
          ...newState.slice(0, selectedBookIdx),
          addBook,
          ...newState.slice(selectedBookIdx + 1),
        ];
      }
    },

    removeAndDecrementBook: (state, action) => {
      const newState = [...state.cartBooks];
      const selectedBookIdx = newState.findIndex((book) => {
        return book.id === action.payload.id;
      });
      const bookSelected = newState[selectedBookIdx] as Book;
      if (bookSelected.quantity === 1) {
        const { id } = action.payload;
        state.cartBooks = newState.filter((book) => book.id !== id);
      } else {
        const modifiedBook = {
          ...bookSelected,
          quantity: bookSelected.quantity - 1,
        };
        state.cartBooks = [
          ...newState.slice(0, selectedBookIdx),
          modifiedBook,
          ...newState.slice(selectedBookIdx + 1),
        ];
      }
    },
    removeBook: (state, action) => {
      const newState = [...state.cartBooks];
      const { id } = action.payload;
      const removeBook = newState.filter((book) => book.id !== id);
      return { cartBooks: removeBook };
    },
  },
});

export const { addToCart, removeAndDecrementBook, removeBook } =
  cartSlice.actions;
export default cartSlice.reducer;
