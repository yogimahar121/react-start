import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from "react-router-dom";



export default function Navbar(props) {
  return (
   <>
   <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/about">{props.home}</Link> */}
          <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/">Link</Link> */}
          <a className="nav-link" href="#">Link</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
          {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item"> */}
          {/* <a className="nav-link disabled">Disabled</a> */}
        {/* </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          <button type="button" className="btn btn-primary btn-circle btn-sm">Blue</button>
    <button type="button" className="btn btn-secondary btn-circle btn-sm">Gray</button>
    <button type="button" className="btn btn-success btn-circle btn-sm">Green</button>
    <button type="button" className="btn btn-danger btn-circle btn-sm">Red</button>
    <button type="button" className="btn btn-warning btn-circle btn-sm">Yellow</button>
    <button type="button" className="btn btn-light btn-circle btn-sm">White</button>
    <button type="button" onClick={props.toggleMode} className="btn btn-dark btn-circle btn-sm">Black</button>
    
    

     
    </div>
  </div>
</nav>
   </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string
}

Navbar.defaultProps = {
    title: "default title",
    home: "default home"
}




