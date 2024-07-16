import dayjs from "dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const timePassed = (start, now) => {
  return now.subtract(start).format("HH:MM");
};

const storeDaysData = (changeInTime, data) => {
  const day = dayjs().day();
  if (day === 6) {
    return;
  }

  const daysData = {
    // day : start:stop:timepassed
    0: [0, 0, 0],
    1: [0, 0, 0],
    2: [0, 0, 0],
    3: [0, 0, 0],
    4: [0, 0, 0],
  };
  try {
    AsyncStorage.setItem("daysInfo", JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

const GetData = (dataJson, type) => {
  const data = JSON.parse(dataJson);
  console.log(data);
  if (type === "timepassed") {
    return data[dayjs().day()][2];
  } else if (type === "start") {
    return data[dayjs().day()][0];
  } else {
    return data[dayjs().day()][1];
  }
};

const SetData = (dataJson, info, type) => {
  const data = JSON.parse(dataJson);
  if (type === "timepassed") {
    data[dayjs().day()][2] = info;
  } else if (type === "start") {
    data[dayjs().day()][0] = inf0;
  } else {
    data[dayjs().day()][1] = inf0;
  }
  try {
    AsyncStorage.setItem("daysInfo", JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

export { SetData, GetData };
