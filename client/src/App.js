import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Collections from './Components/Pages/Collections';
import Search from './Components/Pages/Search';
import Navbar from './Components/Navbar';

import About from './Components/Pages/About';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/collections" component={Collections}/>
        {/* <Route exact path="/search" component={Search}/> */}
        {/* <Route exact path="/about" component={About}/> */}
      </div>
    </Router>
  )
}

export default App;
