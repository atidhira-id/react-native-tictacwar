import { StyleSheet } from "react-native";
import { useTheme } from "../../styles/themes";

const themes = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: themes.color.appBackground,
  },
  sectionHeader: {
    color: themes.color.text,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    color: themes.color.text,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
    paddingLeft: 10,
  },
});

export default styles;
