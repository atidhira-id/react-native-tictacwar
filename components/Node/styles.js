import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  node: {
    width: 100,
    height: 100,
    backgroundColor: "#aaa",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  text: {
    fontSize: 36,
  },
  numerator: {
    width: 15,
    height: 15,
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default styles;
