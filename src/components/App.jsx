import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Header, Clock, History, ActionButton } from "./index";
import { theme } from "../config/colors";
import { useSelector } from "react-redux";

const Root = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  console.log(darkMode);
  return (
    <>
      <StatusBar style={darkMode ? "light" : "dark"} />
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: darkMode ? theme.grey : theme.white },
        ]}
      >
        <View>
          <Header />
          {/* <Clock /> */}
        </View>
        <View style={styles.buttonContainer}>
          <History />
          <ActionButton />
        </View>
      </SafeAreaView>
    </>
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
