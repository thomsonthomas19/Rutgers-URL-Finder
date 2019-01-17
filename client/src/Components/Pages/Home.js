import React from 'react';
// import image under images like doge.jpg
// import dogpic from './images/doge.jpg';
// import "../About/About.css";
import picture from './images/html.png';

const styles = {
  hero: {
    // backgroundImage: `url(${dogpic})`,
    backgroundSize: "cover",
    fontFamily: "Abril Fatface",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
    backgroundColor: "#cc0033",
    color: "white",
    textShadow: "0 0 10px black",
    minHeight: "45vh"
  },
  h3: {
    justifyContent: 'center'
  }
}

const Home = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center" style={styles.hero}>
      {/* <img src={picture}/> */}
        <h1 className="display-4">Welcome to the Rutgers URL Finder App!</h1>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
          <div className="welcome text-center d-flex align-items-center justify-content-center" style={styles.h3}>
          <h3>Sup Rutgers Coding Bootcamp Alumni!</h3>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
  }


export default Home;