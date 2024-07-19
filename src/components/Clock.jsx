import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import dayjs from "dayjs";
import { GetData, timePassed } from "../config/getTimePassed.js";
import { useSelector } from "react-redux";
import ThemedText from "./ThemedText.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("screen").width * 0.6;
const Clock = () => {
  const [startTime, setStartTime] = useState(0);
  const [dateTime, setDateTime] = useState(dayjs());
  const darkMode = useSelector((state) => state.theme.darkMode);
  const clocked = useSelector((state) => state.clocked.isClocked);

  useEffect(() => {
    getinfo();
    console.log(clocked);

    const intervalId = setInterval(async () => {
      setDateTime(dayjs());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const getinfo = async () => {
    const info = GetData(await AsyncStorage.getItem("daysInfo"), "start");
    setStartTime(info);
  };

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
        {startTime !== 0 && (
          <ThemedText style={styles.time}>
            {dayjs(timePassed(startTime, dateTime))
              .add(13, "hours")
              .format("HH:mm:ss")}
          </ThemedText>
        )}

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
