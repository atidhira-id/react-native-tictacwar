import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import useTicTacWar from "../../hooks/useTicTacWar";
import Board from "../../components/Board";

const Game = () => {
  const { board, player, winner, isTie, handlePress, handleReset } =
    useTicTacWar();

  if (winner) {
    Alert.alert(`Player ${winner} won!!!`, "", [
      { text: "OK", onPress: handleReset },
    ]);
  } else if (isTie) {
    Alert.alert(`It\'s a tie!!!`, "", [{ text: "OK", onPress: handleReset }]);
  }

  return (
    <View style={styles.container}>
      <Board board={board} onPress={handlePress} />
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
      <Text>player: {player}</Text>
      <Text>winner: {winner}</Text>
      <Text>isTie: {isTie ? "YES" : "NO"}</Text>
    </View>
  );
};

export default Game;
