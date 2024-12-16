import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Board from "./Board";

const Game = () => {
  const initialBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const [board, setBoard] = useState(...initialBoard);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  useEffect(() => {
    checkWinner();
  }, [board, player]);

  const handlePress = (rIndex, nIndex) => {
    if (board[rIndex][nIndex] === "" && !winner) {
      const newBoard = [...board];
      newBoard[rIndex][nIndex] = player;
      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  const checkWinner = () => {
    // rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] !== "" &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        setWinner(board[i][0]);
        return;
      }
    }

    // column
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] !== "" &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        setWinner(board[0][i]);
        return;
      }
    }

    // diagonal
    if (
      board[0][0] !== "" &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      setWinner(board[0][0]);
      return;
    } else if (
      board[0][2] !== "" &&
      board[2][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      setWinner(board[0][2]);
      return;
    }
  };

  const resetBoard = () => {
    setBoard(...initialBoard);
    setPlayer("X");
    setWinner("");
  };

  useEffect(() => {
    if (winner) {
      Alert.alert(`Player ${winner} won!!!`, "", [
        { text: "OK", onPress: resetBoard },
      ]);
    }
  }, [winner]);

  useEffect(() => {
    if (!winner) {
      const isBoardFull = board.every((row) => {
        return row.every((node) => node !== "");
      });

      if (isBoardFull) {
        Alert.alert("It's a tie!!!", "", [{ text: "OK", onPress: resetBoard }]);
      }
    }
  }, [board, winner]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TicTacWar</Text>
      <Board board={board} onPress={handlePress} />
      <TouchableOpacity style={styles.resetButton} onPress={resetBoard}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Game;
