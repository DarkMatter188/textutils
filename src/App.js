import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';



// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



let user = {
  firstname : "Apoorv",
  lastname : "Ranjan"
}

let func = function(user){
  console.log(user.firstname)
  return user.firstname + " " + user.lastname;
}

const element = (
  <h1 className = "greeting">Hello</h1>
);

function App() {
  const [mode,setMode] = useState('light')
  

  const[alert,setAlert] = useState(null)
  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-light')
  // }

  const toggleMode = () =>{
    // console.log(cls)
    // removeBodyClasses();
    if(mode === 'light'){
    //   document.body.classList.add('bg-'+cls)
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled successfully","success")
      // document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled successfully","success")
      // document.title = 'TextUtils - Light Mode'
    }
  }

  const toggleModeGreen = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'green'
      showAlert("Green mode has been enabled successfully","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled successfully","success")
    }
  }


// "homepage": "https://DarkMatter188.github.io/textutils", Add inside package.json


  return (
    <>
    {/* <Router> */}
    <Navbar title = "TextUtils" aboutText = "About Us" home = "Home" mode = {mode} toggleMode = {toggleMode} toggleModeGreen={toggleModeGreen}/>
    {/* <Navbar /> */}

    <Alert alert={alert}/>

    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode}/>} /> */}
            {/* <About /> */}

            {/* <Route exact path="/" element={<TextForm heading = "Try TextUtils- Word counter, character counter, Remove Extra Spaces " mode = {mode} showAlert={showAlert}/>} />  */}
    {/* </Routes> */}

    <TextForm heading = "Enter text to analyze below" mode = {mode} showAlert={showAlert}/>

      
      {/* <About/> */}

    </div>
    
    {/* </Router> */}




    </>
    
  );
}

export default App;
