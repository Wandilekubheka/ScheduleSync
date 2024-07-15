import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { theme } from "../config/colors";

const ActionButton = () => {
  const [isClocked, setIsClocked] = useState(false);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => {}} style={styles.container}>
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
