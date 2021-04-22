import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import TasksContainer from "./src/components/TaskEpic/TasksContainer";
import Header from "./src/components/_Shared/Header";

export default function App() {
  // création et initialisation du tableau d'objets "tasks" (modifiable avec setTask)
  // qui va contenir la liste des tâches
  const [tasks, setTask] = useState([
    {
      title: "ceci est la première tâche",
      completed: false,
      id: new Date().getTime().toString(),
    },
  ]);

  console.log("tasks = ", tasks);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TasksContainer tasks={tasks} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a69bd",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 20 : 0,
    color: "white",
  },
  txt: {
    color: "white",
    fontSize: 16,
  },
});
