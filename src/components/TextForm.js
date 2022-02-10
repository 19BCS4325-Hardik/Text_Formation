import React,{useState} from "react"
var CryptoJS = require("crypto-js")


export default function TextForm(props) {
    const handleupClick=()=>{
        console.log("The button was clicked");
        let new_Text = text.toUpperCase();
        setText(new_Text);
    }
    const handleonChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handlelowClick=()=>{
      let new_text = text.toLowerCase();
      setText(new_text);
    }
    const handleclearClick=()=>{
      setText("");
    }
    const handleEncryptClick=()=>{
    var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
    console.log("encrypted text", ciphertext.toString());
    setText(ciphertext.toString());
    }
  const [text,setText] = useState("");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
      </div>
      <button type="button" className="btn btn-info mx-2" onClick={handleupClick}>Convert to UpperCase</button>
      <button type="button" className="btn btn-dark mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
      <button type="button" className="btn btn-success mx-2" onClick={handleclearClick}>Clear</button>
      <button type="button" className="btn btn-danger mx-2" onClick={handleEncryptClick}>Encrypt</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
