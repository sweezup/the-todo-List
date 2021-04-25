import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const AddTaskButton = ({ toggleForm, isFormAvailable }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={toggleForm}>
      {/* rendu conditionnel : en focntion du flag isFormAvailable, on affiche un + ou une X  */}
      {isFormAvailable ? (
        <Text style={styles.txt}>X</Text>
      ) : (
        <Text style={styles.txt}>+</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    //alignItems: "center",
    //borderWidth: 3,
    borderRadius: 30,
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "#7bed9f",
    justifyContent: "center",
  },
  txt: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#57606f",
    textAlign: "center",
  },
});

export default AddTaskButton;
