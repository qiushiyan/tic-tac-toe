import React from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/Navigator";
import { LinearGradientBackground, Text, Button } from "@components";
interface HomeProps {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
}

// colors={["#120318", "#221a36"]}

const Home = ({ navigation }: HomeProps) => {
  return (
    <LinearGradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.logo} source={require("@assets/logo.png")} />
        <View style={styles.buttonContainer}>
          <Button
            title="Single Player"
            onPress={() =>
              navigation.navigate("SinglePlayerGame", { gameId: "123" })
            }
          />
          <Button title="Multi Player" />
          <Button title="Login" />
          <Button title="Settings" />
        </View>
      </ScrollView>
    </LinearGradientBackground>
  );
};

export default Home;
