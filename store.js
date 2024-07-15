import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./src/features/userDataSlice";
import themeSlice from "./src/features/themeSlice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    theme: themeSlice,
  },
});
