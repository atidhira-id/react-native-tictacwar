import { StyleSheet } from "react-native";

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

export default styles;
