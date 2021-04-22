import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TaskTile from "./TaskTile";

const TasksContainer = () => {
  return (
    <View style={styles.container}>
      <TaskTile title="Ceci est la première tâche !" />
      <TaskTile title="Ceci est la seconde tâche !!" />
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
