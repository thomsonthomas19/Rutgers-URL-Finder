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

import NewBookmark from './Components/Pages/NewBookmark';

import Collection from './Components/Pages/Collection';

import Bookmark from './Components/Pages/Bookmark';
// Navbar
import Navbar from './Components/Navbar/Navbar';
// Footer
import Footer from './Components/Footer/Footer';
// Modal
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
        <Route exact path="/collections/id/:id" component={Collection}/>
        <Route exact path="/bookmarks/new" component={NewBookmark}/>
        <Route exact path="/bookmarks/id/:id" component={Bookmark}/>
  

      </div>
 
    </Router>
  
    <Footer/>
</div>
  )
}


export default App;
