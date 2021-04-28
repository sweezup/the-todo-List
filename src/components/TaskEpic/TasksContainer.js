import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CountersContainer from "./CountersContainer";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import AddTaskButton from "./AddTaskButton";

const TasksContainer = () => {
  // création et initialisation du tableau d'objets "tasks" (modifiable avec setTask)
  // qui va contenir la liste des tâches
  const [tasks, setTasks] = useState([
    /*     {
      id: new Date().getTime().toString(),
      title: "ceci est la première tâche",
      completed: false,
    }, */
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
  console.log(
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxx ---->>>>>> onAddTask --> tasks = ",
    tasks
  );

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
          //id: id, (on peut simplifier l'ecriture, on mettant juste "id," à la place de "id:i d" dans ce cas présent)
          id,
          title: task.title,
          completed: !task.completed,
        });
      } else {
        // les autres tâches sont àjoutées au tableau
        newTasks.push(task);
      }
      console.log("contenu de tasks : ", tasks);
    });
    // on remplace toutes les ancienes tâches avec le nouveau tableau des tâches contenant celle mise à jour
    setTasks(newTasks);
  };
  console.log(
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxx ---->>>>>> onChangeStatus ----> tasks",
    tasks
  );

  // SUPPRIMER UNE TACHE
  const deleteTask = (id) => {
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.id != id) {
        newTasks.push({
          id: task.id,
          title: task.title,
          completed: task.completed,
        });
      }
    });
    setTasks(newTasks);
  };
  console.log(
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxx ---->>>>>> deleteTask ----> tasks",
    tasks
  );

  const nbTasksCompleted = () => {
    let count = 0;
    tasks.forEach((task) => {
      if (task.completed) {
        count++;
      }
    });
    return count;
  };

  const [isFormAvailable, setIsFormAvailable] = useState(true);

  const toggleForm = () => {
    setIsFormAvailable(!isFormAvailable);
  };
  /*   console.log("------------------------------->>>>>>> tasks, ", tasks);
  console.log("------------------------------->>>>>>> tasks ID , ", tasks); */

  return (
    <View style={styles.container}>
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={nbTasksCompleted}
      />
      {/* rendu conditionnel : en fonction du flag isFormAvailable, on affiche ou non le composant TaskForm */}
      {isFormAvailable && <TaskForm onAddTask={onAddTask} />}
      <TasksList
        tasks={tasks}
        onChangeStatus={onChangeStatus}
        onDeleteTask={deleteTask}
      />
      <AddTaskButton
        toggleForm={toggleForm}
        isFormAvailable={isFormAvailable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    height: "90%",
    width: "95%",
    position: "relative",
    marginBottom: 30,
    flex: 1,
  },
});

export default TasksContainer;
