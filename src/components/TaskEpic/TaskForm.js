import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Input } from "react-native-elements";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const _onChangeText = (task) => {
    setTask(task);
  };
  return (
    <View style={styles.container}>
      <Input
        value={task}
        placeholder="saisir la tâche"
        onChangeText={_onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    //width: "50%",
  },
});

export default TaskForm;
