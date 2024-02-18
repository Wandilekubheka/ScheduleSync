import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import dayjs from "dayjs";
import { timePassed } from "../config/getTimePassed.js";

const width = Dimensions.get("screen").width * 0.6;
const Clock = ({ darkMode }) => {
  const [startTime, setStartTime] = useState(dayjs());
  const [dateTime, setDateTime] = useState(dayjs());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(dayjs());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

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
        <Text
          style={[styles.time, { color: darkMode ? theme.white : theme.grey }]}
        >
          {timePassed(startTime, dateTime)}
        </Text>
        <Text
          style={[styles.date, { color: darkMode ? theme.white : theme.grey }]}
        >
          {dateTime.format("dddd DD, MMMM")}
        </Text>
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
