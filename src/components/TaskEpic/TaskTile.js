import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskTile = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: "#dfe4ea",
    marginBottom: 5,
  },
  txt: {
    fontSize: 18,
  },
});

export default TaskTile;
