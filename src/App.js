import "./App.css";
import "./Button.css";
import { useState } from "react";
import ThemeContextProvider from "./ThemeContext";
import Button from "./Button";
import * as math from "mathjs";

function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [screenInput, setScreenInput] = useState("873");

  function UpdateScreen(newValue) {
    let symbol = "+-*/";
    // console.log(screenInput[screenInput.length - 1]);
    if (
      symbol.includes(screenInput[screenInput.length - 1]) &&
      symbol.includes(newValue)
    )
      return;
    setScreenInput(screenInput + newValue);
  }

  function ChangeTheme() {
    if (currentTheme == "dark") {
      setCurrentTheme("light");
      return;
    }

    if (currentTheme == "light") {
      setCurrentTheme("blue");
      return;
    }

    setCurrentTheme("dark");
  }

  function ResetScreen() {
    setScreenInput("");
  }

  function CalculateResult() {
    try {
      let res = math.evaluate(screenInput).toString();
      setScreenInput(res);
    } catch (error) {
      console.log("no correct input on the screen right now");
    }
  }

  function Erase() {
    let newInput = screenInput.substring(0, screenInput.length - 1);
    setScreenInput(newInput);
  }

  return (
    <ThemeContextProvider theme={currentTheme}>
      <div className={`body body-${currentTheme}`}>
        <div className="app-container">
          <header className={`header-${currentTheme}`}>
            <p className="calc">calc</p>
            <div className="theme-switcher">
              <p className="theme-heading">THEME</p>
              <div>
                <p className="theme-options">1 2 3</p>
                <label className={`theme-button-container-${currentTheme}`}>
                  <button
                    className={`theme-button theme-button-${currentTheme}`}
                    onClick={ChangeTheme}
                  ></button>
                </label>
              </div>
            </div>
          </header>
          <div className={`screen screen-${currentTheme}`}>{screenInput}</div>
          <div
            className={`button-container btn-container-theme-${currentTheme}`}
          >
            {/* row1 */}
            <Button number="7" clickFunction={UpdateScreen} />
            <Button number="8" clickFunction={UpdateScreen} />
            <Button number="9" clickFunction={UpdateScreen} />

            <button
              className={`btn btn-del btn-reset-and-del-${currentTheme}`}
              onClick={Erase}
            >
              DEL
            </button>
            {/* row2 */}
            <Button number="4" clickFunction={UpdateScreen} />
            <Button number="5" clickFunction={UpdateScreen} />
            <Button number="6" clickFunction={UpdateScreen} />
            <Button number="+" clickFunction={UpdateScreen} />
            {/* row3 */}
            <Button number="1" clickFunction={UpdateScreen} />
            <Button number="2" clickFunction={UpdateScreen} />
            <Button number="3" clickFunction={UpdateScreen} />
            <Button number="-" clickFunction={UpdateScreen} />
            {/* row4 */}
            <Button number="." clickFunction={UpdateScreen} />
            <Button number="0" clickFunction={UpdateScreen} />
            <Button number="/" clickFunction={UpdateScreen} />
            <button
              className={`btn btn-theme-${currentTheme}`}
              onClick={() => UpdateScreen("*")}
            >
              x
            </button>

            {/* row5 */}
            <button
              className={`btn btn-reset btn-reset-and-del-${currentTheme}`}
              onClick={ResetScreen}
            >
              RESET
            </button>
            <button
              className={`btn btn-equal btn-equal-${currentTheme}`}
              onClick={CalculateResult}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
    // </body>
  );
}

export default App;
