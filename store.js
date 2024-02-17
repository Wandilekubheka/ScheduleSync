import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./src/features/userDataSlice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
