// taken from pupster
import React from 'react';
import {Link} from 'react-router-dom';
import "../Navbar/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Accio, URL!</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" 
            className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>Home</Link>
          </li>
          <li className="nav-item">
           <Link to="/about" 
            className={(window.location.pathname === "/about") ? "nav-link active" : "nav-link"}>About</Link>
          </li>
          <li className="nav-item">
           <Link to="/collections" 
            className={(window.location.pathname === "/collections") ? "nav-link active" : "nav-link"}>Collections</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" 
            className={(window.location.pathname === "/search") ? "nav-link active" : "nav-link"}>Search</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/urlcard" 
            className={(window.location.pathname === "/urlcard") ? "nav-link active" : "nav-link"}>Url Card</Link>
          </li> */}
         
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;