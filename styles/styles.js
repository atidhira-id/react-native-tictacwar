import { StyleSheet } from "react-native";
import { useTheme } from "./themes";

export const useGlobalStyles = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.appBackground,
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
    },
    header: {
      backgroundColor: theme.color.headerBackground,
      borderBottomWidth: 0,
    },
    headerTitle: {
      tintColor: theme.color.buttonText,
      color: theme.color.buttonText,
    },
    button: {
      backgroundColor: theme.color.button,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
    },
    buttonText: {
      color: theme.color.buttonText,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    text: {
      color: theme.color.text,
      fontSize: 16,
    },
  });

  return styles;
};
