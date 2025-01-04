import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGlobalStyles } from "../../styles/styles";

const Menu = () => {
  const navigation = useNavigation();
  const styles = useGlobalStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>Play The Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Instructions")}
      >
        <Text style={styles.buttonText}>How To Play</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Credits")}
      >
        <Text style={styles.buttonText}>Credits</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
