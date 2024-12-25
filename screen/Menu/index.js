import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Play The Game"
        onPress={() => navigation.navigate("Game")}
      />
      <Button
        title="How To Play"
        onPress={() => navigation.navigate("Instructions")}
      />
      <Button title="Credits" onPress={() => navigation.navigate("Credits")} />
    </View>
  );
};

export default Menu;
