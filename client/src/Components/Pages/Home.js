import React from 'react';
// import image under images like doge.jpg
// import dogpic from './images/doge.jpg';
// import "../About/About.css";
import picture from './images/accioURL.png';

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
         <div className="jumbotron jumbotron-fluid text-center"  style={{backgroundColor: "white", paddingBottom: "0"}}>
        <div>
          <h1 className="display-4" style={{color: "#cc0033"}}>Home</h1>
          <hr/>
          <div style={{marginLeft: "13%", marginRight: "13%", width: "74%"}}>
          <h2 className="text-center">Welcome to our Bookmark Application for the part time Rutgers Coding Bootcamp from July 2018 to January 2019</h2>
          </div>
          <img src={picture} alt="logo" style={{width: "300px", height: "300px"}}/>
        </div>
        </div>
     
          {/* homepage landing  */}
    
 </div>
  )
  }


export default Home;
