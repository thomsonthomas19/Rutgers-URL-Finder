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

const About = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center" style={styles.hero}>
      {/* <img src={picture}/> */}
        <h1 className="display-4">Accio,URL!</h1>
        <h2 className="display-8">Rutgers Coding Bootcamp Edition</h2>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
          <ul className="list-unstyled">
  <li className="media">
    <img src="https://via.placeholder.com/64x64" className="mr-3" alt="..."/>
    <div className="media-body">
      <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li className="media my-4">
    <img src="https://via.placeholder.com/64x64" className="mr-3" alt="..."/>
    <div className="media-body">
      <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li className="media">
    <img src="https://via.placeholder.com/64x64" className="mr-3" alt="..."/>
    <div className="media-body">
      <h5 className="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
</ul>
          </div>
        </div>
      </div>
    </div>
  )
  }


export default About;
