import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpperClick = () => {
       // console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText)
       // props.showAlert("Converted to Upper case","success")
    }

    const handleLowClick = () => { 
       let newText = text.toLowerCase();
       setText(newText)
      // props.showAlert("Converted to lower case","success")

   }

   const handleClear = () => {
     let newText = " ";
     setText(newText)
     
 }
 const handleCopy = () => {
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
}
const handleExtraSpaces = () => {
  let newText1 = text.split(/[ ]+/)
  setText(newText1.join(" "))
}




    const handleOnChange = (event) => {
        //console.log("on change");
        setText(event.target.value)
    }


    const [ text, setText] = useState('Enter text');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
         <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2"onClick={handleUpperClick}> Convert to uppercase</button>
        <button className="btn btn-primary mx-2"onClick={handleLowClick}> Convert to lowercase</button>
        <button className="btn btn-primary mx-2"onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2"onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2"onClick={handleExtraSpaces}>Remove ExtarSpace</button>

    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Summary</h1>
      <p>{text.split(" ").length}words and {text.length}characters</p>
      <p>{0.08*text.split(" ").length} minutes to read</p>
    </div>
    </>
  )
}
