import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

const TasksContainer = () => {
  // création et initialisation du tableau d'objets "tasks" (modifiable avec setTask)
  // qui va contenir la liste des tâches
  const [tasks, setTask] = useState([
    {
      id: new Date().getTime().toString(),
      title: "ceci est la première tâche",
      completed: false,
    },
  ]);

  // methode (callback) pour ajouter une tâche avec le bouton "ajouter"
  const onAddTask = (taskTitle) => {
    const newTask = {
      id: new Date().getTime().toString(),
      title: taskTitle,
      completed: false,
    };
    // AJOUT D'UNE NOUVELLE TACHE A L'AIDE DU STATE
    setTask([newTask, ...tasks]);
  };

  return (
    <View style={styles.container}>
      <TaskForm onAddTask={onAddTask} />
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
