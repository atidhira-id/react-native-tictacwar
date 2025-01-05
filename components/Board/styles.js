import { StyleSheet } from "react-native";
import { palette } from "../../styles/palette";

const styles = StyleSheet.create({
  board: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: palette.darkBlue,
  },
  row: {
    flexDirection: "row",
  },
});

export default styles;
