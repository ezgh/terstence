import React, { useState } from "react";

function TranslateArea() {
  const [text, setText] = useState("");
  const [str, setStr] = useState("");

  function handleChange(event) {
    const strValue = event.target.value;
    setStr(strValue);
    if (strValue.length === 0) {
      setText("");
    }
  }

  function handleClick(event) {
    const splitString = str.split(" ");
    const result = [];
    for (var i = 0; i < splitString.length; i++) {
      result.push(splitString[i].split("").reverse().join(""));
    }

    setText(result.join(" "));
    event.preventDefault();
  }
  return (
    <div>
      <div>
        <form>
          <textarea
            className="textArea"
            onChange={handleChange}
            autoComplete="off"
            type="text"
            rows="5"
            cols="60"
            value={str}
            required
            placeHolder="Enter Text"
          ></textarea>
          <br></br>{" "}
          <button
            className="translateButton"
            onClick={handleClick}
            type="submit"
          >
            translate
          </button>
        </form>
      </div>

      <div>
        <textarea
          className="result"
          readOnly
          type="text"
          rows="5"
          cols="60"
          value={text}
          placeHolder="Translation"
        ></textarea>
      </div>
    </div>
  );
}

export default TranslateArea;
