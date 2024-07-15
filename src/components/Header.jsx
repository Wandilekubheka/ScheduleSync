import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../config/colors";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../features/themeSlice";
import ThemedText from "./ThemedText";
const Header = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const toogleTheme = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={{ padding: 30 }}></Text>
      <ThemedText style={styles.heading}>ScheduleSync</ThemedText>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => {
          toogleTheme(changeMode());
        }}
      >
        <Ionicons
          name="moon"
          size={24}
          color={darkMode ? theme.white : theme.grey}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toggleButton: {
    padding: 15,
  },
  heading: {
    fontWeight: "700",
    fontSize: 18,
  },
});
