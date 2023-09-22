import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Book } from "../types/book";

type AppContextInputType = {
  inputValue: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  favoriteBooks: Book[];
  getfavoriteBooks: (book: Book) => void;
};

const AppContext = createContext<AppContextInputType>(
  {} as AppContextInputType
);

const appReducer = (state: Book[], action: { type: string; book: Book }) => {
  switch (action.type) {
    case "ADDFAVORITEBOOK": {
      const newArrayOfFavorites = [...state];
      const indexOfNewArray = newArrayOfFavorites.findIndex(
        (favoriteBook) => favoriteBook.id === action.book.id
      );
      if (newArrayOfFavorites[indexOfNewArray]) {
        newArrayOfFavorites.splice(indexOfNewArray, 1);
        return newArrayOfFavorites;
      }
      return [...state, action.book];
    }
    default: {
      throw new Error(`This action type doesnt exist ${action.type}`);
    }
  }
};
function getStorageValue(key: string, defaultValue: unknown) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved as string);
  return initial || defaultValue;
}

const initialValue: Book[] = [];
export function AppProvider({ children }: { children: ReactNode }) {
  const [favoriteBooks, dispatch] = useReducer(appReducer, initialValue, () => {
    return getStorageValue("favorites", initialValue) as Book[];
  });
  const [inputValue, setSearchInput] = useState("");
  const getfavoriteBooks = (book: Book) => {
    dispatch({ type: "ADDFAVORITEBOOK", book: book });
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
  }, [favoriteBooks]);
  return (
    <AppContext.Provider
      value={{
        inputValue,
        setSearchInput,
        favoriteBooks,
        getfavoriteBooks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const app = useContext(AppContext);
  return app;
};
