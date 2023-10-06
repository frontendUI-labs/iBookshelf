import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "../types/book";

const initialState = {
  initialBooks: [],
};

export const bookSlice = createSlice({
  name: "ADDFAVORITEBOOK",
  initialState: initialState.initialBooks as Book[],
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      const newArrayOfFavorites = [...state];
      const indexOfNewArray = newArrayOfFavorites.findIndex(
        (favoriteBook) => favoriteBook.id === action.payload.id
      );
      if (newArrayOfFavorites[indexOfNewArray]) {
        newArrayOfFavorites.splice(indexOfNewArray, 1);
        return newArrayOfFavorites;
      }
      return [...state, action.payload];
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
