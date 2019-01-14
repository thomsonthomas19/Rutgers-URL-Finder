// taken from pupster
import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Accio, URL!</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" 
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
          </li>
          <li className="nav-item">
           <Link to="/discover" 
            className={(window.location.pathname === "/discover") ? "nav-link active" : "nav-link"}>Discover</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" 
            className={(window.location.pathname === "/search") ? "nav-link active" : "nav-link"}>Search</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;