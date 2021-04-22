import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  const months = [
    "janvier",
    "fevrier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  const days = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "sanedi",
  ];

  const date = new Date();

  const dateOfTheDay =
    days[date.getDay()] +
    " " +
    date.getDate() +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear();

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{dateOfTheDay}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  txt: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Header;
