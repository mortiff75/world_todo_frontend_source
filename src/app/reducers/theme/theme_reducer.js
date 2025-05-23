import { createSlice } from "@reduxjs/toolkit";

const initialState = { isDark: false };

const reducer = {
  // Change Theme
  toggleTheme: (state) => {
    state.isDark = !state.isDark;
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: reducer,
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
