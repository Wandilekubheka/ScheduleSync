import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Header, Clock, History, ActionButton } from "./index";
import { theme } from "../config/colors";
import { useSelector } from "react-redux";

const Root = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  console.log(darkMode);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar
          backgroundColor={darkMode ? theme.grey : theme.white}
          barStyle={darkMode ? "light-content" : "dark-content"}
        />
        <Header darkMode={darkMode} />
        <Clock darkMode={darkMode} />
      </View>
      <View style={styles.buttonContainer}>
        <History />
        <ActionButton />
      </View>
    </SafeAreaView>
  );
};

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
