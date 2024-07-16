import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { theme } from "../config/colors";
import { IfDataDoesntExist, SetData } from "../config/getTimePassed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const ActionButton = () => {
  const [isClocked, setIsClocked] = useState(false);
  const updateTime = async () => {
    setIsClocked(!isClocked);
    let data = await AsyncStorage.getItem("daysInfo");
    console.log(data);
    if (data === null) {
      IfDataDoesntExist();
      data = await AsyncStorage.getItem("daysInfo");
    }
    if (isClocked) {
      SetData(data, dayjs().day(), "stop");
    } else {
      SetData(data, dayjs().day(), "start");
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
