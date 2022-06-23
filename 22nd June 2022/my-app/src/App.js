import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import TextUtils from "./TextUtils";

function App() {
  const [mode, setMode] = useState(`light`);
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(126,166,227)";
    }
  };
  return (
    <>
      <Navbar
        home="Home"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <TextUtils value="Enter your text here" mode={mode}></TextUtils>
    </>
  );
}

export default App;
