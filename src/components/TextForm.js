import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
    //  console.log("Up Clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase Text","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase Text","success");
    }

    // const handleCapitalize = () => {
    //     let newText = text.charAt(0).toUpperCase() + text.slice(1);
    //     setText(newText)
    // }

    const handleCapitalize = () => {
    
        //split the text string into an array of strings 
        //whenever a blank space is encountered
        const arr = text.split(" ");

        //loop through each element of the array and capitalize the first letter.
        for (var i = 0; i < arr.length; i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        for (var j = 0; j < arr.length; j++){
            arr[j] = arr[j].charAt(0) + arr[j].slice(1).toLowerCase();
        }

        //Join all the elements of the array back into a string 
        //using a blankspace as a separator 
        const updateText = arr.join(" ");
        setText(updateText)
        props.showAlert("Converted to Capitalize Text","success");
    }
// to understand above consept go to this link --- https://flexiple.com/javascript/javascript-capitalize-first-letter/
    

    const handleOnChange = (event) => {
        // console.log("Handle On Change");
        setText(event.target.value);
    }

const [text, setText] = useState("Enter text here");

    return (
        <>
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#3b2b66':'white', color : props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
        <button className="btn btn-danger mx-2" onClick={handleCapitalize}>Convert to Capitalize</button>
    </div>
    <div className="container my-2" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in textarea for get preview..."}</p>
    </div>
    </> 
  )
}
