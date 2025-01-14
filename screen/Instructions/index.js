import React from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGlobalStyles } from "../../styles/styles";
import styles from "./styles";

const Instructions = () => {
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();

  const instructions = [
    "Game dimainkan pada petak permainan 3x3.",
    "Permainan dimainkan oleh dua orang pemain.",
    "Pemain secara bergantian menandai kotak pada petak permainan.",
    "Satu pemain menggunakan 'X' dan yang lainnya menggunakan 'O.'",
    "Pemain pertama yang mendapatkan tiga tanda yang tersusun secara vertikal, horizontal, ataupun diagonal, dinyatakan menang.",
    "Jika semua kotak terisi dan tidak ada pemain yang berhasil menyusun pola, maka permainan dinyatakan seri.",
  ];

  return (
    <ScrollView style={styles.container}>
      {instructions.map((instruction, index) => (
        <Text key={index} style={styles.instruction}>
          {`${index + 1}. ${instruction}`}
        </Text>
      ))}
      <TouchableOpacity
        style={[globalStyles.button, styles.button]}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={globalStyles.buttonText}>Play the Game</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Instructions;
