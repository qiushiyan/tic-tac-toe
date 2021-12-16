import React, { ReactElement } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import styles from "./Button.styles";
import Text from "../Text";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export default function Button({
  title,
  style,
  loading,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={loading}
      {...props}
      style={[styles.button, style]}
    >
      {loading ? (
        <ActivityIndicator color="#000" />
      ) : (
        <Text style={styles.buttonText} bold={true}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
