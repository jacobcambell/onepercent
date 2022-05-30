import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
const axios = require("axios");
import { SOME_STRING } from "@env";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>This is some more text!</Text>
      <Button onPress={sayHello} title="Click me"></Button>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function sayHello() {
  console.log(SOME_STRING);
}
