import React from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

interface TextProps extends NativeTextProps {
  bold: boolean;
  size?: number;
}

const Text: React.FC<TextProps> = ({
  children,
  style,
  bold,
  size,
  ...props
}) => {
  const fontFamily = bold ? "FiraCode_700Bold" : "FiraCode_400Regular";

  return (
    <NativeText {...props} style={[{ fontFamily, fontSize: size }, style]}>
      {children}
    </NativeText>
  );
};

Text.defaultProps = {
  bold: false,
  size: 20,
};

export default Text;
