import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CountersContainer = ({ nbTasks, nbTasksCompleted }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.txt}>Task count</Text>
        <Text style={[styles.txt, { textAlign: "center", fontWeight: "bold" }]}>
          {nbTasks}
        </Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.txt}>Tasks completed count</Text>
        <Text style={[styles.txt, { textAlign: "center", fontWeight: "bold" }]}>
          {nbTasksCompleted()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subContainer: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "lightgrey",
    padding: 5,
    marginHorizontal: 5,
  },
  txt: {
    fontSize: 20,
    color: "grey",
  },
});

export default CountersContainer;
