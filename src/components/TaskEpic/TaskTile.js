import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const TaskTile = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.img}
          source={require("./../../../assets/icon_circle.png")}
        />
        <Text style={styles.txt}>{title}</Text>
      </View>
      <Image
        style={styles.img}
        source={require("./../../../assets/icon_bin.png")}
      />
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
