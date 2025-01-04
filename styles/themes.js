import { palette } from "./palette";

const defaultTheme = {
  color: {
    appBackground: palette.black,
    headerBackground: palette.darkBlue,
    button: palette.darkBlue,
    buttonText: palette.lightBlue,
    text: palette.white,
  },
};

export const useTheme = () => defaultTheme;
