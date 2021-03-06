import React from 'react';
// import image under images like doge.jpg
// import dogpic from './images/doge.jpg';
// import "../About/About.css";
import picture from './images/html.png';
import { pathToFileURL } from 'url';




const styles = {
  hero: {
    // backgroundImage: `url(${dogpic})`,
    backgroundSize: "cover",
    fontFamily: "Georgia",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
    backgroundColor: "white",
    color: "#cc0033",
    textShadow: "0 0 100px grey",
    height: "50px",
  },
  h3: {
    justifyContent: 'center'
  },
  h4: {
    justifyContent: 'center'
  },
  p: {
    justifyContent: 'center'
  }
}

const Search = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center" style={styles.hero}>
        {/* <img src={picture}/> */}
        <h1 className="display-4">Search</h1>
        <hr/>
        {/* <h2 className="display-8">Rutgers Coding Bootcamp Edition</h2> */}
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="welcome text-center " style={styles.h3}>
              <h3> Search the Collections</h3>
            </div>
          </div>
        </div>
        {/*below the header  */}
        {/* body of the page here */}
        <div className="body">
          {/* <h4>Search for some URLs:</h4>
          <p>hi</p> */}
        </div>
        {/* above the footer */}
      </div>
    </div>
  )
}


export default Search;