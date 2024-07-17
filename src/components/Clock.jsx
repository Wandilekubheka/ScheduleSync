import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import dayjs from "dayjs";
import { GetData, timePassed } from "../config/getTimePassed.js";
import { useSelector } from "react-redux";
import ThemedText from "./ThemedText.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import timezone from "dayjs/plugin/timezone.js";
import utc from "dayjs/plugin/utc"; // ES 2015

const width = Dimensions.get("screen").width * 0.6;
const Clock = () => {
  const [startTime, setStartTime] = useState(dayjs());
  const [dateTime, setDateTime] = useState(dayjs());
  const darkMode = useSelector((state) => state.theme.darkMode);
  dayjs.extend(timezone);
  dayjs.extend(utc);

  useEffect(() => {
    getinfo();

    const intervalId = setInterval(async () => {
      if (startTime === 0) {
        startTime(dayjs());
      }
      setDateTime(dayjs());
      console.log(startTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const getinfo = async () => {
    setStartTime(GetData(await AsyncStorage.getItem("daysInfo"), "start"));
  };
  getinfo;

  return (
    <LinearGradient
      style={[styles.container]}
      colors={[theme.linearStart, theme.linearEnd]}
    >
      <View
        style={[
          styles.innerContainer,
          { backgroundColor: darkMode ? theme.grey : theme.white },
        ]}
      >
        <ThemedText style={styles.time}>
          {dayjs(timePassed(startTime, dateTime))
            .add(13, "hours")
            .format("HH:mm:ss")}
        </ThemedText>
        <ThemedText style={styles.date}>
          {dateTime.format("dddd DD, MMMM")}
        </ThemedText>
      </View>
    </LinearGradient>
  );
};

export default Clock;

const styles = StyleSheet.create({
  time: {
    fontWeight: "700",
    fontSize: 48,
  },
  date: {
    fontWeight: "700",
    fontSize: 16,
  },
  container: {
    alignItems: "center",
    backgroundColor: theme.linearStart,
    width: width,
    height: width,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: width / 2,
  },
  innerContainer: {
    width: width - 30,
    height: width - 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width - 30 / 2,
    gap: 6,
  },
});
