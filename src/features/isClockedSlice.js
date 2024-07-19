import { createSlice } from "@reduxjs/toolkit";

export const clockedSlice = createSlice({
  name: "clocked",
  initialState: {
    isClocked: false,
  },
  reducers: {
    toogleClock: (state) => {
      state.isClocked = !state.isClocked;
    },
  },
});

export default clockedSlice.reducer;
export const { toogleClock } = clockedSlice.actions;
