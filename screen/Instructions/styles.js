import { StyleSheet } from "react-native";
import { useTheme } from "../../styles/themes";

const themes = useTheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: themes.color.appBackground,
  },
  instruction: {
    color: themes.color.text,
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 24,
  },
  button: {
    marginTop: 30,
    alignSelf: "center",
  },
});

export default styles;
