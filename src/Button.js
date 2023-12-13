import "./Button.css";
import { useTheme } from "./ThemeContext";

export default function Button({ number, extraClass, clickFunction }) {
  const theme = useTheme();
  let classes = `btn-theme-${theme}`;
  return (
    <button
      onClick={() => clickFunction(number)}
      className={`btn ${classes} ${extraClass}`}
    >
      {number}
    </button>
  );
}
