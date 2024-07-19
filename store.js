import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./src/features/userDataSlice";
import themeSlice from "./src/features/themeSlice";
import clockedSlice from "./src/features/isClockedSlice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    theme: themeSlice,
    clocked: clockedSlice,
  },
});
