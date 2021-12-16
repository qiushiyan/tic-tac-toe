import React from "react";
import { Text, Button } from "react-native";
import { StackNavigatorParams } from "@config/Navigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradientBackground } from "@components";
import { SafeAreaView } from "react-native-safe-area-context";

interface GameProps {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
}

const SinglePlayerGame = ({ navigation }: GameProps) => {
  return (
    <LinearGradientBackground>
      <SafeAreaView>
        <Text>Game</Text>
        <Button
          title="Home"
          onPress={() => navigation.navigate("Home")}
        ></Button>
      </SafeAreaView>
    </LinearGradientBackground>
  );
};

export default SinglePlayerGame;
