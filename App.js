import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import Header from "./src/components/_Shared/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#273c75",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 20 : 0,
    color: "white",
  },
  txt: {
    color: "white",
    fontSize: 16,
  },
});
