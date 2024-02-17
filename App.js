import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { theme } from "./src/config/colors";
import Header from "./src/components/Header";
import Clock from "./src/components/Clock";
import History from "./src/components/History";
import ActionButton from "./src/components/ActionButton";
import { Provider } from "react-redux";
import { store } from "./store";

let darkMode = false;
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={darkMode ? theme.grey : theme.white}
          barStyle={darkMode ? "light-content" : "dark-content"}
        />
        <Header darkMode={darkMode} />
        <Clock darkMode={darkMode} />
        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          <History darkMode={darkMode} />
          <ActionButton />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode ? theme.grey : theme.white,
  },
});
