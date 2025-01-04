import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import useTicTacWar from "../../hooks/useTicTacWar";
import Board from "../../components/Board";
import { useGlobalStyles } from "../../styles/styles";
import styles from "./styles";

const Game = () => {
  const globalStyles = useGlobalStyles();
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
    <View style={globalStyles.container}>
      <View style={styles.gameStatus}>
        <Text style={globalStyles.text}>PLAYER = {player}</Text>
        <Text style={globalStyles.text}>WINNER = {winner || "NONE"}</Text>
      </View>
      <Board board={board} onPress={handlePress} />
      <TouchableOpacity style={globalStyles.button} onPress={handleReset}>
        <Text style={globalStyles.buttonText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Game;
