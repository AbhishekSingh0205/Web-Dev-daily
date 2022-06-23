import React, { useState } from "react";
import props from "react";
export default function (props) {
  const [text, setText] = useState("");
  const handleOnChage = (event) => {
    setText(event.target.value);
    // props.showAlert("Converted to Uppercase","success");
  };
  const toUp = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };
  const toLow = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };
  const toCap = () => {
    let str = text;
    str = str
      .split(" ")
      .map(
        ([firstChar, ...rest]) =>
          firstChar.toUpperCase() + rest.join("").toLowerCase()
      )
      .join(" ");
    setText(str);
    props.showAlert("Converted to Capitalise", "success");
  };
  const clear = () => {
    setText("");
    props.showAlert("Cleared the text", "success");
  };
  const removeExtraSpace = () => {
    let str = text;
    str = str.replace(/\s+/g, " ").trim();
    setText(str);
    props.showAlert("Removed extra spaces", "success");
  };
  const handleClick = () => {
    var copyText = document.getElementById("exampleFormControlTextarea1");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied to clipboard", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "rgb(20 27 37)" }}
      >
        <label
          id="myBox"
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        >
          Write text below :
        </label>
        <textarea
          placeholder={props.value}
          onChange={handleOnChage}
          className="form-control"
          value={text}
          id="exampleFormControlTextarea1"
          rows="3"
          style={{
            backgroundColor: props.mode === "dark" ? "#44516a" : "white",
            color: props.mode === "dark" ? "white" : "rgb(20 27 37)",
            caretColor: props.mode === "dark" ? "white" : "rgb(20 27 37)",
          }}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={toUp}
        >
          Convert to Upper Case
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={toLow}
        >
          Convert to Lower Case
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={toCap}
        >
          Capitlize first letter of each word
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={clear}
        >
          Clear text
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={removeExtraSpace}
        >
          Remove extra spaces
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={handleClick}
        >
          Copy text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "rgb(20 27 37)" }}
      >
        <h2>Overview of new string</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
