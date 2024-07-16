import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { theme } from "../config/colors";
import {
  GetData,
  IfDataDoesntExist,
  SetData,
  timePassed,
} from "../config/getTimePassed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const ActionButton = () => {
  const [isClocked, setIsClocked] = useState(false);
  const [todayInfo, setTodayInfo] = useState();
  const [clockIn, setClockIn] = useState();
  const updateTime = async () => {
    setIsClocked(!isClocked);
    let data = await AsyncStorage.getItem("daysInfo");
    if (data === null) {
      IfDataDoesntExist();
      data = await AsyncStorage.getItem("daysInfo");
    }
    if (isClocked) {
      SetData(data, dayjs(), "stop");
      data = await AsyncStorage.getItem("daysInfo");
    } else {
      SetData(data, dayjs(), "start");
      data = await AsyncStorage.getItem("daysInfo");
    }
    const start = GetData(data, "start");
    const stop = GetData(data, "stop");
    if (start !== 0 && stop !== 0) {
      console.log(dayjs(timePassed(start, stop)).format("hh:mm"));
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={updateTime} style={styles.container}>
        <LinearGradient
          style={{ borderRadius: 10 }}
          colors={[theme.linearStart, theme.linearEnd]}
        >
          {isClocked ? (
            <Text style={styles.text}>Clock Out</Text>
          ) : (
            <Text style={styles.text}>Clock In</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    width: "50%",
  },
  text: {
    padding: 20,
    color: "#FFF",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
});
