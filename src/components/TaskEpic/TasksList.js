import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import TaskTile from "./TaskTile";

const TasksList = ({ tasks, onChangeStatus, onDeleteTask }) => {
  const _renderItem = ({ item }) => (
    <TaskTile
      title={item.title}
      id={item.id}
      completed={item.completed}
      onChangeStatus={onChangeStatus}
      onDeleteTask={onDeleteTask}
    />
  );
  //const _renderItem = ({ item }) => <Text>{item.title} </Text>;
  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90%",
    width: "90%",
  },
});

export default TasksList;
