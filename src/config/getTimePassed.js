import dayjs from "dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const timePassed = (start, now) => {
  if (start === undefined || now === undefined) {
    return null;
  }

  return dayjs(now).diff(dayjs(start));
};

const timePassed_ = (seconds) => {
  var sec_num = parseInt(seconds, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
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
    return data[dayjs().day() - 1][2];
  } else if (type === "start") {
    return data[dayjs().day() - 1][0];
  } else {
    return data[dayjs().day() - 1][1];
  }
};

const SetData = (dataJson, info, type) => {
  const data = JSON.parse(dataJson);
  if (type === "timepassed") {
    data[dayjs().day() - 1][2] = info;
  } else if (type === "start") {
    data[dayjs().day() - 1][0] = info;
  } else {
    data[dayjs().day() - 1][1] = info;
  }
  try {
    return AsyncStorage.setItem("daysInfo", JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

export { SetData, GetData, IfDataDoesntExist, timePassed_ };
