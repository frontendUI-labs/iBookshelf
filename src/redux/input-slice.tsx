import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialValue = {
  searchQuery: "",
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState: initialValue,
  reducers: {
    appSliceBook: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { appSliceBook } = appSlice.actions;
export default appSlice.reducer;
