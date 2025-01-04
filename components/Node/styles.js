import { StyleSheet } from "react-native";
import { palette } from "../../styles/palette";

const styles = StyleSheet.create({
  node: {
    width: 100,
    height: 100,
    backgroundColor: palette.blue,
    borderWidth: 1,
    borderColor: palette.darkBlue,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  text: {
    fontSize: 36,
    color: palette.darkBlue,
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
