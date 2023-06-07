import React,{useState} from "react";



export default function TextForm(props) {
    let [text, setText] = useState("");
//   setText("Changing default text");


    const handleUpClick = () => {
        console.log("UpperCase button got clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")
    }

    const handleLowClick = () => {
      console.log("Lowercase button got clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case","success")
    }
    
    const clearText =()=>{

      text = setText("")
      props.showAlert("Cleared the text","success")
      // if(props.mode==='dark'){
      //   document.body.style.backgroundColor = 'yellow'
      // }
      // else{
      //   document.body.style.backgroundColor = 'white'
      // }
    }

    const handleItalicClick = ()=>{
      

      console.log("Italicized button got clicked" + text);
      let newText = text.repeat(2);
      setText(newText);
      props.showAlert("Repeated twice","success")


      // color: 'red',
      // backgroundColor: 'blue'
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }

    const removeSpace = function(){
      let patt = /[ ]+/
      let myText = text.split(patt)
      let newText = myText.join(" ");
      setText(newText)
      props.showAlert("Extra spaces removed","success")
    }

    return (
      <>
    <div className = "container my-3" style = {{color: props.mode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" id="myBox"  onChange = {handleOnChange} value={text} rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} ></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleItalicClick}>Repeat same text</button>
        <button className="btn btn-primary mx-2" onClick={removeSpace}>Remove space</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        </div>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} letters</p>
      <p>{0.008 * text.split(" ").length } Minutes needed to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>

  )
}
