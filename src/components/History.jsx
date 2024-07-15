import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ListItem } from "@rneui/themed";
import { theme } from "../config/colors";
import { data } from "../config/data";
import { useSelector } from "react-redux";
import { selectDataHistory } from "../features/userDataSlice";

const History = () => {
  const [expanded, setExpanded] = useState(false);
  const data_ = useSelector(selectDataHistory);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <ListItem.Accordion
          containerStyle={{ backgroundColor: "transparent" }}
          content={
            <ListItem.Content>
              <ListItem.Title
                style={{
                  fontWeight: "700",
                  fontSize: 20,
                  color: darkMode ? theme.white : theme.grey,
                }}
              >
                History
              </ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expanded}
        >
          {data_.map(({ date, endTime, startTime }) => (
            <View style={styles.HistoryContainer} key={date}>
              <Text
                style={[
                  styles.HistoryKey,
                  { color: darkMode ? theme.white : theme.grey },
                ]}
              >
                {date}
              </Text>
              <Text
                style={[
                  styles.HistoryValue,
                  { color: darkMode ? theme.white : theme.grey },
                ]}
              >
                {startTime}
              </Text>
            </View>
          ))}
          <View style={styles.summaryContainer}>
            <Text
              style={[
                styles.summary,
                { color: darkMode ? theme.white : theme.grey },
              ]}
            >
              Summary
            </Text>
            <Text
              style={[
                styles.duration,
                { color: darkMode ? theme.white : theme.grey },
              ]}
            >
              40:00
            </Text>
          </View>
        </ListItem.Accordion>
      </TouchableOpacity>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  HistoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  HistoryKey: {
    fontWeight: "700",
    fontSize: 16,
  },
  HistoryValue: {
    fontWeight: "700",
    fontSize: 16,
  },
  historyWrapper: {
    gap: 10,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  summary: {
    fontWeight: "500",
    fontSize: 20,
  },
  duration: {
    fontWeight: "700",
    fontSize: 20,
    paddingRight: 15,
  },
});
