import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Board = ({ board, onPress }) => {
  return (
    <View style={styles.board}>
      {board.map((row, rIndex) => (
        <View key={rIndex} style={styles.row}>
          {row.map((node, nIndex) => (
            <TouchableOpacity
              key={nIndex}
              style={styles.node}
              onPress={() => onPress(rIndex, nIndex)}
            >
              <Text style={styles.nodeText}>{node}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Board;
