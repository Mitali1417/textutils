import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Lowercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("Lowercase was Clicked" + text);
    let newText = " ";
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  // text="new text"; //Wrong way to change the state
  // setText=("new text"); //Correct way to change the state
  return (
    <>
      <div className="container" style={{color:props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{backgroundColor:props.mode === "dark" ? "grey" : "white", color:props.mode === "dark" ? "white" : "black"}}
          ></textarea>
        </div>
        <button className="btn btn-primary  mx-1 " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary  mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
       
        <button className="btn btn-primary  mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary  mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary  mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <br />
      <br />
      <div className="container" style={{color:props.mode === "dark" ? "white" : "black"}}>
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        {/* To find the time to read no of words by system google it first and got 0.008 */}
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>
    </>
  );
}
