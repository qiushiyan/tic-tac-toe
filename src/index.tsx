import React from "react";
import Navigator from "@config/Navigator";
import { AppBootstrap } from "@components";

const App = () => {
  return (
    <AppBootstrap>
      {/* <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello World I miss you</Text>
      </View> */}
      <Navigator />
    </AppBootstrap>
  );
};

export default App;
