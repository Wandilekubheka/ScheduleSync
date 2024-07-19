import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import dayjs, { Dayjs } from "dayjs";
import { GetData, timePassed, timePassed_ } from "../config/getTimePassed.js";
import { useSelector } from "react-redux";
import ThemedText from "./ThemedText.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("screen").width * 0.6;
const Clock = () => {
  const [startTime, setStartTime] = useState(0);
  const [dateTime, setDateTime] = useState();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const clocked = useSelector((state) => state.clocked.isClocked);
  const start = dayjs();

  useEffect(() => {
    getinfo();
    const intervalId = setInterval(() => {
      if (clocked) {
        const delta = dayjs() - startTime;
        setDateTime(timePassed_(Math.floor(delta / 1000)));
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [clocked]);
  const getinfo = async () => {
    const info = GetData(await AsyncStorage.getItem("daysInfo"), "start");
    console.log(info);
    setStartTime(dayjs(info));
    console.log(startTime);
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
        {clocked && <ThemedText style={styles.time}>{dateTime}</ThemedText>}

        <ThemedText style={styles.date}>
          {start.format("dddd DD, MMMM")}
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
