import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "ThemeSlice",
  initialState: {
    darkMode: false,
  },
  reducers: {
    changeMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeMode } = ThemeSlice.actions;

export default ThemeSlice.reducer;
