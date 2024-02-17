import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  dataHistory: [],
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addStartTime: (state, action) => {
      state.dataHistory = [...state.dataHistory, action.payload];
    },
    addEndTime: (state, action) => {
      state.dataHistory[state.dataHistory.length - 1]["endTime"] = dayjs();
    },
    clearWeekInfo: (state, action) => {
      state.dataHistory = [];
    },
  },
});

export const { addStartTime, clearWeekInfo, addEndTime } =
  userDataSlice.actions;
export const selectDataHistory = (state) => state.userData.dataHistory;

export default userDataSlice.reducer;
