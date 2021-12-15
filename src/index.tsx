import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home, Game } from "@screens";

const App = () => {
  return (
    <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
      <Home />
      <Game />
    </View>
  );
};

export default App;
