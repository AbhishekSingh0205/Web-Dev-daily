import React, { useState } from "react";
import props from "react";
export default function (props) {
  const [text, setText] = useState("");
  const handleOnChage = (event) => {
    setText(event.target.value);
  };
  const toUp = () => {
    setText(text.toUpperCase());
  };
  const toLow = () => {
    setText(text.toLowerCase());
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
  };
  const clear = () => {
    setText("");
  };
  const removeExtraSpace = () => {
    let str = text;
    str = str.replace(/\s+/g, " ").trim();
    setText(str);
  };
  const handleClick = () => {
    var copyText = document.getElementById("exampleFormControlTextarea1");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  };
  return (
    <>
      <div className="container">
        <label
          id="myBox"
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        >
          Example textarea
        </label>
        <textarea
          placeholder={props.value}
          onChange={handleOnChage}
          className="form-control"
          value={text}
          id="exampleFormControlTextarea1"
          rows="3"
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
      <div className="container">
        <h2>Overview of new string</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
