import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// Home
import Home from './Components/Pages/Home';
// About
import About from './Components/Pages/About';
// Collections
import Collections from './Components/Pages/Collections';
// Search
import Search from './Components/Pages/Search';
// Navbar
import Navbar from './Components/Navbar/Navbar';
// Footer
import Footer from './Components/Footer/Footer';
// Modal
import Modal from './Components/Modal/Modal';
import Wrapper from './Components/Wrapper';
import logo from './logo.svg';
import './App.css';



const App = () => {
  return (
 <div>
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/collections" component={Collections}/>
        <Route exact path="/search" component={Search}/>
      </div>
 
    </Router>
  
    <Footer/>
</div>
  )
}


export default App;
