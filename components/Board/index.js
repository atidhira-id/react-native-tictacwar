import React from "react";
import { View } from "react-native";
import Node from "../Node";
import styles from "./styles";

const Board = ({ board, onPress }) => {
  return (
    <View style={styles.board}>
      {board.map((row, rIndex) => (
        <View key={rIndex} style={styles.row}>
          {row.map((node, nIndex) => (
            <Node
              key={nIndex}
              text={node}
              handlePress={() => onPress(rIndex, nIndex)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Board;
