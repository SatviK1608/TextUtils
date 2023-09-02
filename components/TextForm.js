import React ,{useState} from 'react'

export default function TextForm() {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();  //JS function converts string to uppercase
        setText(newText);
    }
    const handleLowClick=()=>{ 
        let newText=text.toLowerCase();  //JS function converts string to uppercase
        setText(newText);
    }
    const clear=()=>{
        setText('');
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();//this will help to unselect the text to be copied 
    }
    const handelOnChange=(event)=>{
        
        setText(event.target.value)     //helps in updating the text added by user,if not done
                                        //than we will not be able to write
    }
    const wordCounter=()=>{
        if(text===''){
            return 0;
        }
        else{
            return text.split(" ").filter((element)=>{return element.length!==0}).length;
            // filter method does not add empty spaces to array so these are not counted as words
        }
    }
    const [text,setText]=useState('');

  return (
    <>
        <div>
            <div class="mb-3">
                <h1>Enter your text here</h1>
                <textarea className="form-control mx-3" id="myBox" rows="8" value={text} onChange={handelOnChange} style={{width:'50%'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>To UpperCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>To LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={clear}>Clear</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3 mx-1">
            <h1>Your Text Sumarry</h1>
            <p>{wordCounter()} words and {text.length} characters.</p>
            {/* wordCounter function is used to handle the problem of 1word showing when textarea is empty*/}
            <p> {(0.008 * wordCounter()).toFixed(3)} minutes to read</p>
        </div> 
    </>
  )
}
