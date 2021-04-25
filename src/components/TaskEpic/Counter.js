import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const Counter = ({ title, count }) => {
  return (
    <TouchableOpacity>
      <View>
        <Text style={styles.txt}>{title}</Text>
        <Text style={[styles.txt, { fontWeight: "bold", textAlign: "center" }]}>
          {count}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  txt: { fontSize: 20, color: "grey" },
});
export default Counter;
