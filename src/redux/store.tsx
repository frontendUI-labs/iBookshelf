// import { Book } from "../types/book";
import userReducer from "./book-slice";
import appReducer from "./input-slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { Book } from "../types/book";
import cartReducer from "./cartSlice.tsx";

const persisConfig = {
  key: "root",
  storage,
  // whitelist: ["bookState", "inputState", "cartState"],
};
const rootReduce = combineReducers({
  bookState: userReducer,
  // inputState: appReducer,
  cartState: cartReducer,
});

const persistedReducer = persistReducer(persisConfig, rootReduce);
// const persistedReducerCart = persistReducer(persisConfig, cartReducer);

export const store = configureStore({
  reducer: {
    // user: persistedReducer,
    user: persistedReducer,
    app: appReducer,
    cart: persistReducer(persisConfig, cartReducer),
  },
  middleware: [thunk],
});
export interface RootBookState {
  user: {
    bookState: Book[]; // Asegúrate de reemplazar 'Book' con el tipo real de tus libros
    // Otros campos en tu estado de usuario, si los tienes
  };
}
export interface RootInputState {
  app: {
    searchQuery: string;
  };
}

export interface CartBookType {
  cart: {
    cartBooks: Book[];
  };
}
