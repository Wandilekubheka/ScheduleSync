import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { theme } from "../config/colors";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { timePassed } from "../config/getTimePassed.js";

import dayjs from "dayjs";

const ActionButton = () => {
  const [isClocked, setIsClocked] = useState(false);
  const day = dayjs();
  const dayOfWeek = day.format("dddd");
  const firstDay = async () => {
    let data = {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thurdsday: 0,
      Friday: 0,
      Saturday: 0,
    };

    await AsyncStorage.setItem("data", JSON.stringify(data));
  };
  const checkIn = async () => {
    if (dayOfWeek !== "Monday") {
      try {
        let data = JSON.parse(await AsyncStorage.getItem("data"));
        data[dayOfWeek] = day;
        await AsyncStorage.mergeItem("data", JSON.stringify(data));
        console.log(data);

        setIsClocked(true);
      } catch (err) {
        alert(err);
      }
    }
  };
  const checkOut = async () => {
    try {
      let data = JSON.parse(await AsyncStorage.getItem("data"));
      let start = data[dayjs().format("dddd")];
      start = dayjs(start);
      console.log(typeof start);
      data[dayjs().format("dddd")] = timePassed(start, dayjs());
      setIsClocked(false);
      console.log(data);
    } catch (err) {
      alert(err);
    }
  };

  const clockButton = () => {
    if (dayOfWeek === "Monday" && !isClocked) {
      firstDay();
      checkIn();
    } else if (!isClocked) {
      checkIn();
    } else {
      checkOut();
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => clockButton()} style={styles.container}>
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
