import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <AntDesign name="MessageOutlined " size={32} color="white" />
        <Text style={styles.text}> Messages!!!!!</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text1}>Message 1</Text>
        <Text style={styles.text1}>Message 2</Text>
        <Text style={styles.text1}>Message 3</Text>
        <Text style={styles.text1}>Message 4</Text>
        <Text style={styles.text1}>Message 5</Text>
      </View>
      <View style={styles.view3}>
        <Text>A</Text>
        <Text>B</Text>
        <Text>C</Text>
        <Text>D</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  view1: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    flex: 10,
    backgroundColor: "black",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  view3: {
    flex: 2,
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  text: {
    color: "white",
    fontfamily: "Times New Roman",
    fontSize: 25,
    fontWeight: "bold",
  },
  text1: {
    color: "white",
    fontSize: 29,
  },
});
