import { createContext } from "react";

export const themes = {
  white: "",
  light: "white-content",
};

export const ThemeContext = createContext({
  theme: themes.white,
  changeTheme: () => {},
});
