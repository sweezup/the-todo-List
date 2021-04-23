import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Input, Button } from "react-native-elements";

const TaskForm = ({ onAddTask }) => {
  // variable taskTitle qui sera modifiée depuis la text input
  const [taskTitle, setTaskTitle] = useState("");

  // methode pour ajouter du texte depuis la text input
  const _onChangeText = (taskTitle) => {
    setTaskTitle(taskTitle);
  };

  // méthode pour ajouter une tâche lorsqu'on presse sur le bouton
  const _onPressButton = () => {
    if (taskTitle.length > 0) {
      onAddTask(taskTitle);
      setTaskTitle("");
    }
  };
  return (
    <View style={styles.container}>
      <Input
        value={taskTitle}
        placeholder="saisir la tâche"
        onChangeText={_onChangeText}
        containerStyle={styles.input}
      />
      <Button
        title="Ajouter"
        type="solid"
        raised={false}
        buttonStyle={styles.btn}
        onPress={_onPressButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    width: "80%",
  },
  btn: {
    //width: "60%",
  },
});

export default TaskForm;
