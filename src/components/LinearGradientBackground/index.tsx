import { View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./LinearGradientBackground.styles";
import { LinearGradientBackgroundColor } from "@config/Colors";

const LinearGradientBackground: React.FC = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={styles.LinearGradient}
        colors={LinearGradientBackgroundColor}
      />
      {children}
    </View>
  );
};

export default LinearGradientBackground;
