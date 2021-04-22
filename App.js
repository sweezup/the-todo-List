import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import TasksContainer from "./src/components/TaskEpic/TasksContainer";
import Header from "./src/components/_Shared/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TasksContainer />
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
