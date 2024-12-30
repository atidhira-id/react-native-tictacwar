import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Node = ({ text, handlePress }) => {
  return (
    <TouchableOpacity style={styles.node} onPress={() => handlePress()}>
      <Text style={styles.text}>{text}</Text>
      {/* {text ? (
        <View style={styles.numerator}>
          <Text>1</Text>
        </View>
      ) : null} */}
    </TouchableOpacity>
  );
};

export default Node;
