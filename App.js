import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.box0}>0</Text>
      <Text style={styles.box0}>1</Text>
      <Text style={styles.box0}>2</Text>
      <Text style={styles.box0}>3</Text>
      <Text style={styles.box0}>4</Text>
      <Text style={styles.box0}>5</Text>
      <Text style={styles.box0}>6</Text>
      <Text style={styles.box0}>7</Text>
      <Text style={styles.box0}>8</Text>
      <Text style={styles.box0}>9</Text>
      <Text style={styles.box0}>X</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    border: 10,
    height: 100,
  },
  box0: {
    flex: 1,
    backgroundColor: "Yellow",
  },
  box1: {
    height: 100,
    backgroundColor: "Yellow",
  },
  box2: {
    height: 100,
    backgroundColor: "Yellow",
  },
  box3: {
    height: 100,
    backgroundColor: "Yellow",
  },
  box4: {
    height: 100,
    backgroundColor: "Yellow",
  },
  box5: {
    height: 100,
    backgroundColor: "Yellow",
  },
  box6: {
    height: 100,
    backgroundColor: "Yellow",
  },
  box7: {
    height: 100,
    backgroundColor: "Yellow",
  },
  box8: {
    height: 100,
    backgroundColor: "Yellow",
  },
  box9: {
    height: 100,
    backgroundColor: "Yellow",
  },
  boxX: {
    height: 100,
    backgroundColor: "Yellow",
  },
  boxOks: {
    height: 100,
    backgroundColor: "Yellow",
  },
});
