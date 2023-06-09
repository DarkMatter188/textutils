import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    // <div>
    //   <p>Hello me!!</p>
    // </div>
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">{props.home}</a>
        </li>

        


        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/about">{props.aboutText}</a>
        </li>
      </ul>

      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
      </div> */}
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  
  
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode(null)}}/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>

  </div>


  <div className={`form-check form-switch text-${props.mode==='light'?'green':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleModeGreen}/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Green Mode</label>

  </div>


</nav>
</>

);


}

Navbar.propTypes={title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string}

Navbar.defaultProps={title: "Set title here",
                    aboutText: "About Text here"}