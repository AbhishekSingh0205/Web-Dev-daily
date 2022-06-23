import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextUtils from "./components/TextUtils";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState(`light`);
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode have been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(20 27 37)";
      showAlert("Dark mode have been enabled", "success");
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
      <Alert alert={alert} />
      <TextUtils
        value="Enter your text here"
        mode={mode}
        showAlert={showAlert}
      ></TextUtils>
    </>
  );
}

export default App;
