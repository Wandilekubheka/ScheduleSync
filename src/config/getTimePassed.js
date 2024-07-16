import dayjs from "dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const timePassed = (start, now) => {
  console.log(start, now);
  return dayjs(now).diff(dayjs(start));
};

const storeDaysData = (changeInTime, data) => {
  const day = dayjs().day();
  if (day === 6) {
    return;
  }
};

const IfDataDoesntExist = () => {
  const data = {
    // day : start:stop:timepassed
    0: [0, 0, 0],
    1: [0, 0, 0],
    2: [0, 0, 0],
    3: [0, 0, 0],
    4: [0, 0, 0],
  };
  try {
    AsyncStorage.setItem("daysInfo", JSON.stringify(data));
    console.log("set");
  } catch (e) {
    console.log(e);
  }
};
const GetData = (dataJson, type) => {
  const data = JSON.parse(dataJson);
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
    data[dayjs().day()][0] = info;
  } else {
    data[dayjs().day()][1] = info;
  }
  try {
    return AsyncStorage.setItem("daysInfo", JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

export { SetData, GetData, IfDataDoesntExist };
