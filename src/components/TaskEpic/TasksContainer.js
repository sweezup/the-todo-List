import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TasksList from "./TasksList";

const TasksContainer = ({ tasks }) => {
  console.log("tasks [TasksContainer] = ", tasks);
  return (
    <View style={styles.container}>
      <TasksList tasks={tasks} />
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
