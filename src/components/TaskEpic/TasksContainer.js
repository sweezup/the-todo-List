import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CountersContainer from "./CountersContainer";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

const TasksContainer = () => {
  // création et initialisation du tableau d'objets "tasks" (modifiable avec setTask)
  // qui va contenir la liste des tâches
  const [tasks, setTasks] = useState([
    {
      id: new Date().getTime().toString(),
      title: "ceci est la première tâche",
      completed: false,
    },
  ]);

  // AJOUT D'UNE NOUVELLE TACHE
  // methode (callback) pour ajouter une tâche avec le bouton "ajouter"
  const onAddTask = (taskTitle) => {
    const newTask = {
      id: new Date().getTime().toString(),
      title: taskTitle,
      completed: false,
    };
    //  Ajout de la nouvelle dans le tableau à l'aide du state
    setTasks([newTask, ...tasks]);
  };

  // CHANGER LE STATUT DE LA TACHE
  const onChangeStatus = (id) => {
    // tableau qui contiendra toutes les tâches avec la tâche mise à jour
    let newTasks = [];
    // on parcours le tableau de tâches (state), pour trouver (avec son id) la tâche à modifier
    tasks.forEach((task) => {
      if (task.id === id) {
        //setTasks({ id: id, title: task.title, completed: !task.completed }); // à tester
        // une fois trouvé, on l'ajoute au tableau d'objets (newTasks)
        newTasks.push({
          id: id,
          title: task.title,
          completed: !task.completed,
        });
      } else {
        // les autres tâches sont àjoutées au tableau
        newTasks.push(task);
      }
    });
    // on remplace toutes les ancienes tâches avec le nouveau tableau des tâches contenant celle mise à jour
    setTasks(newTasks);
    console.log(
      "liste des tâches, voyons si la tache est mise à jour ooooo",
      tasks
    );
  };

  // SUPPRIMER UNE TACHE
  const deleteTask = (id) => {
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.id != id) {
        newTasks.push({ id: id, title: task.title, completed: task.completed });
      }
    });
    setTasks(newTasks);
  };

  const nbTasksCompleted = () => {
    let count = 0;
    tasks.forEach((task) => {
      if (task.completed) {
        count++;
      }
    });
    return count;
  };

  return (
    <View style={styles.container}>
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={nbTasksCompleted}
      />
      <TaskForm onAddTask={onAddTask} />
      <TasksList
        tasks={tasks}
        onChangeStatus={onChangeStatus}
        onDeleteTask={deleteTask}
      />
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
