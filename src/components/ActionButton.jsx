import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { theme } from "../config/colors";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import dayjs from "dayjs";

const ActionButton = ({ darkMode }) => {
  const [isClocked, setIsClocked] = useState(false);
  const day = dayjs();

  // const restartData = async (key,value) => {
  //   try {
  //     await AsyncStorage.setItem("appData", JSON.stringify({key:value}));
  //     return data = await AsyncStorage.getItem("appData");
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  // const mergeUsers = async () => {
  //   try {
  //     //save first user
  //     await AsyncStorage.setItem("@MyApp_user", JSON.stringify(USER_1));

  //     // merge USER_2 into saved USER_1
  //     await AsyncStorage.mergeItem("@MyApp_user", JSON.stringify(USER_2));

  //     // read merged item
  //     const currentUser = await AsyncStorage.getItem("appData");

  //     console.log(currentUser);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const addStartToData = () => {
    const days = dataList.filter(({ date }) => date === day.format("dddd"));
    if (days.length === 0) {
      setIsClocked(!isClocked);
      dispatch(
        addStartTime({
          date: day.format("dddd"),
          startTime: day.format("HH:MM"),
          endTime: day.format("HH:MM"),
        })
      );
    } else {
      alert("started for the day...");
    }
  };
  const addEndToData = () => {
    setIsClocked(false);
    dispatch(addEndTime({ something: "something" }));
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => {
          restartData();
        }}
        style={styles.container}
      >
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
