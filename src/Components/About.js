import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor: 'white'
    // });

    // const [btnText,setBtnText] = useState("Enter dark mode")

    // let toggleMode = ()=>{
    //     if(myStyle.color == 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border  : "1px solid white"
    //         })
    //         setBtnText("Enter light mode")

    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enter Dark Mode")
    //     }
    // }
    
    let myStyle = {
        color: props.mode ==='dark'?'white':'rgb(36, 74, 104)',
        backgroundColor: props.mode === 'dark'?'rgb(36, 74, 104)':'white',
        // border: '2px solid',
        // borderColor: props.mode ==='dark'?'white':'#042743'
    }




  return (
    <div className = "container" style={myStyle}>
        <h1 className='my-3' style={{color: props.mode ==='dark'?'white':'rgb(36, 74, 104)'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            TextUtils gives you a way to analyze your text quickly and efficiently.Be it a word count, character count or any modifications needed to be done.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to Use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            TextUtils is a free character count tool that provides instant character count and word count statistics for  a given text.TextUtils reports the number of characters and words.Thus, it is suitable for writing text with word/character limit.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            This word counter app works in any web browsers such as Chrome,Firefox,Internet Explorer, Safari, Opera. It suits to count charactersfacebook, blog, books, excel document, pdf document, essays, etc.
        </div>
        </div>
    </div>
    </div>
    {/* <div className="container my-3">
    <button type="button" className="btn btn-primary" onClick={toggleMode}>{btnText}</button>
    </div> */}
    </div>
  )
}
