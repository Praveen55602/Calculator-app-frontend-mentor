import { useContext, createContext } from "react";
const themeContext = createContext();

export default function ThemeContextProvider({ children, theme }) {
  return (
    <themeContext.Provider value={theme}>{children}</themeContext.Provider>
  );
}

export const useTheme = () => useContext(themeContext);
