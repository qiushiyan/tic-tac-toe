import React, { ReactNode } from "react";
import {
  useFonts,
  FiraCode_400Regular,
  FiraCode_700Bold,
} from "@expo-google-fonts/fira-code";
import AppLoading from "./AppLoading";

const AppBootstrap = ({ children }: { children: ReactNode }) => {
  const [fontLoaded] = useFonts({
    FiraCode_400Regular,
    FiraCode_700Bold,
  });

  return fontLoaded ? <>{children}</> : <AppLoading />;
};

export default AppBootstrap;
