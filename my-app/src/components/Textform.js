import React, {useState} from 'react'

export default function Textform(props) {
  const [text,setText] =useState('')
  const handleUpClick =()=>{
    
    // console.log('UpperCase text: '+text)
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showAlert('converted to upper case', 'success')
  }
  const handleLoClick =()=>{
    
    // console.log('UpperCase text: '+text)
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showAlert('converted to lower case', 'success')
  }
  const handleCopy =()=>{
    var text = document.getElementById('exampleFormControlTextarea1')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('text is copied', 'success')
  }
  const handleclClick =()=>{
    let newtext = ''
    setText(newtext)
    props.showAlert('text is cleared', 'success')
  }
  const handleOnChange =(event)=>{
    // console.log("on change hai ye")
    setText(event.target.value)
  }
  
  
  return (
    <><div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading }</h1>
 <div className="mb-3">
  <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`}  style={ { background: props.mode==='light'?'white':'#5a5a5a'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9">{text.length>0?text:"Enter the text"}</textarea>
</div>
<button onClick={handleUpClick} className="btn btn-primary mx-2">Convert to UpperCase</button>
<button onClick={handleLoClick} className="btn btn-primary mx-2">Convert to LowerCase</button>
<button onClick={handleclClick} className="btn btn-primary mx-2">Clear Text</button>
<button onClick={handleCopy} className="btn btn-primary mx-2">Copy Text</button>
</div>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
  <h2>Length of words {text.split(" ").length-1} and characters {text.length}</h2>
</div>
<h2 style={{color: props.mode==='dark'?'white':'black'}}>This is a preview</h2>
{/* <p style={{color: props.mode==='dark'?'white':'black'}}>{text}</p> */}
<p style={{color: props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter the text"}</p>
   </>
  )
}
