import React, { Component } from 'react';
// taken from pupster
import {BrowserRouter as Router, Route} from 'react-router-dom';
// taken from pupster
import About from './Components/Pages/About';
// taken from pupster
import Discover from './Components/Pages/Discover';
// taken from pupster
import Search from './Components/Pages/Search';
// taken from pupster
import Navbar from './Components/Navbar';

import UrlCard from './Components/Pages/UrlCard';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={About}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/discover" component={Discover}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/urlcard" component={UrlCard}/>
      </div>
    </Router>
  )
}

export default App;
