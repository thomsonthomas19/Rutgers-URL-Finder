import React from 'react';
// import image under images like doge.jpg
// import dogpic from './images/doge.jpg';
// import "../About/About.css";
import picture from './images/chehlsee.jpg';

import tompic from './images/Thomson_Headshot.jpg';


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
  picture: {
    width: 100,
    padding: 10,
  }
}

const About = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center" style={styles.hero}>
        {/* <img src={picture}/> */}
        <h1 className="display-4">About</h1>
        <hr/>
        {/* <h2 className="display-8">Rutgers Coding Bootcamp Edition</h2> */}
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="about-information">
              <p>
                Accio, URL! Rutgers Coding Bootcamp Edition equips all of our fellow Full Stack Rutgers Coding Bootcamp classmates with fundamental links that were shared on our RUTSOM201807FSF4 Slack channel throught the 24 week Full Stack Coding Bootcamp.
      <br></br>
                <br></br>
                This Application is broken down into Collections for each week of the part-time coding bootcamp. Additional tutorials for HTML5, CSS3, JavaScript, jQuery, Node.js, ES6, Responsive Design, Heroku, Git, Express, MERN Stack, React.js, SQL, MongoDB, and other topics covered in class. Panopto in class videos when the stream is working and other class related videos are available for your viewing pleasure.
      <br></br>
                <br></br>
                We would both like to say congratulations on completing this Full Stack Rutgers Coding Bootcamp, that's no small feat! A huge thank you to Alex and all the TAs who made learning a tremendous amount of material throughout this fast paced course a fun experience!
      <br></br>
                <br></br>
              </p>
              {/* ul for thomson/chelsea about info */}
              {/* chelsea */}
              <ul className="list-unstyled">
                <li className="media">
                  <img src={picture} style={styles.picture} />
                  {/* <img src="client/src/Components/Pages/images/chehlsee.jpg" className="mr-3" alt="..." /> */}
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">Chelsea Ciprich</h5>
                    For this project I set up the React framework for the App, as well as the polished frontend and UI. I created the Accio, URL! Logo as well as the branding. A package put to use that was not discussed in class is the react-modal package, an easy way to make modals in React as jQuery is not available. This allowed a way to have a form on each Collection page for POSTing new URLs without disrupting the flow of the rest of the page.
    </div>
                </li>
                {/* thomson */}
                <li className="media my-4">
                <img src={tompic} style={styles.picture} />

                  <div className="media-body">
                    <h5 className="mt-0 mb-1">Thomson Thomas</h5>
                    For this project I worked on creating the backed utilizing a SQL Database through Sequelize. Routes for GET, POST, and DELETE requests were set up for manipulating data through multiple tables. I was also primarily the lead for version control and deployment.

    </div>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About;
