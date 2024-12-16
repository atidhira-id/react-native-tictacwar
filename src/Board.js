import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

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

const styles = StyleSheet.create({
  board: {
    marginTop: 20,
    backgroundColor: "#bbb",
  },
  row: {
    flexDirection: "row",
  },
  node: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nodeText: {
    fontSize: 36,
  },
});

export default Board;
