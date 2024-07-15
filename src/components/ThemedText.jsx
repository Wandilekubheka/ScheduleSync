import { Text } from "react-native";
import { useSelector } from "react-redux";
import { theme } from "../config/colors";

const ThemedText = ({ children, style, ...props }) => {
  const darkTheme = useSelector((state) => state.theme.darkMode);
  return (
    <Text
      {...props}
      style={[{ color: darkTheme ? theme.white : theme.grey }, style]}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
