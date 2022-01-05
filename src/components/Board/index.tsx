import React from "react";
import { View } from "react-native";
import { Board as BoardState } from "@types";
import Text from "../Text";

interface BoardProps {
  state: BoardState;
}

const Board = () => {
  return (
    <View>
      <Text>Board</Text>
    </View>
  );
};

export default Board;
