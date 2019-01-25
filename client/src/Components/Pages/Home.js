import React from 'react';
// import image under images like doge.jpg
// import dogpic from './images/doge.jpg';
// import "../About/About.css";
import picture from './images/html.png';

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
  }
}

const Home = () => {
  return (
//     // // <div>
    //   {/* <div className="jumbotron jumbotron-fluid text-center" style={styles.hero}> */}
    //   {/* <img src={picture}/> */}
    //     {/* <h1 className="display-4">Accio,URL!</h1> */}
    //     {/* <h2 className="display-8">Rutgers Coding Bootcamp Edition</h2> */}
    //   </div>
    <div>
         <div className="jumbotron jumbotron-fluid text-center" style={styles.hero}>
        <div>
          <h1 className="display-4">Home</h1>
          <hr/>
        </div>
        </div>
     
          {/* homepage landing  */}
    
 </div>
  )
  }


export default Home;
