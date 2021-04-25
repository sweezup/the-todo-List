import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Counter = ({ title, count }) => {
  return (
    <View>
      <Text style={styles.txt}>{title}</Text>
      <Text style={[styles.txt, { fontWeight: "bold", textAlign: "center" }]}>
        {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: { fontSize: 20, color: "grey" },
});
export default Counter;
