import React, { Component } from 'react';
// taken from pupster
import {BrowserRouter as Router, Route} from 'react-router-dom';
// taken from pupster
import Home from './Components/Pages/Home';
// taken from pupster
import Collections from './Components/Pages/Collections';
// taken from pupster
import Search from './Components/Pages/Search';
// taken from pupster
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
        <Route exact path="/search" component={Search}/>
        <Route exact path="/about" component={About}/>
      </div>
    </Router>
  )
}

export default App;
