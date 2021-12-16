import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SinglePlayerGame, Home } from "@screens";

export type StackNavigatorParams = {
  Home: undefined;
  SinglePlayerGame: { gameId: string };
};

const Navigator = () => {
  const Stack = createStackNavigator<StackNavigatorParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen
          name="SinglePlayerGame"
          component={SinglePlayerGame}
          initialParams={{ gameId: "123" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
