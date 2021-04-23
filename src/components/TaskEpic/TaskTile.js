import color from "color";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const TaskTile = ({ title, id, completed, onChangeStatus, onDeleteTask }) => {
  // CHANGER LE STATUT DE LA TACHE
  const changeStatus = () => {
    onChangeStatus(id);
  };
  // SUPPRIMER UNE TACHE
  const deleteTask = () => {
    onDeleteTask(id);
  };
  return (
    <View style={styles.container}>
      {/* autre façon d'utiliser la fonction onChangeStatus
      <TouchableOpacity onPress={() => onChangeStatus(id)}> */}
      <TouchableOpacity onPress={changeStatus}>
        <View style={styles.subContainer}>
          <Image
            style={styles.img}
            source={
              completed
                ? require("./../../../assets/icon_check.png")
                : require("./../../../assets/icon_circle.png")
            }
          />
          <Text
            style={[
              styles.txt,
              {
                color: completed ? "grey" : "black",
                fontStyle: completed ? "italic" : "normal",
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteTask}>
        <Image
          style={styles.img}
          source={require("./../../../assets/icon_bin.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: "#dfe4ea",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    marginLeft: 10,
  },
  img: {
    width: 40,
    height: 40,
  },
});

export default TaskTile;
