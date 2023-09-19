import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUppercase = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText("Data Changed")
        props.showAlert("Converted to UPPERCASE", "success");
    }

    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const clearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    
    const handleOnChange = (event) => {
        // console.log("Changed");
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "Success");     
    }

  return (
    <div className='container' style={{ color: props.mode === 'dark'? 'white': 'black'}}>
        <div className="mb-3 my-3">
            <h1>{props.heading}</h1>            
            <textarea name="" id="myBox" cols="30" rows="10" className='form-control' value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark'? '#042743': 'white', color: props.mode === 'dark'? 'white': 'black',}}></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleUppercase}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLowercase}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className="mb-3 my-3" style={{ color: props.mode === 'dark'? 'white': 'black'}}>
            <h1>Your Text Summary</h1>            
            <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim().length } characters</p>
            
            <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
        </div>
    </div>
  )
}
