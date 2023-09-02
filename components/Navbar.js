import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom';



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
      </ul>
      <div class="form-check form-switch mx-3">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label class="form-check-label" htmlFor="flexSwitchCheckDefault " style={props.textStyle}>{props.text1}</label>
      </div>   
     <form className="d-flex mx-3" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> 
    
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={
    title :PropTypes.string    //this object makes sure that we pass string value only to title property
}
Navbar.defaultProps={
    title:'Set title now'    //if we pass no value to title property than this string will display
}
