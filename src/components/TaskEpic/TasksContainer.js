import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TasksContainer = () => {
  return (
    <View style={styles.container}>
      <Text>ceci est une première tâche</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    height: "95%",
    width: "95%",
  },
});

export default TasksContainer;
