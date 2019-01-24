import React from 'react';
// import image under images like doge.jpg
// import dogpic from './images/doge.jpg';
// import "../About/About.css";
import picture from './images/chehlsee.jpg';


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
        {/* <h2 className="display-8">Rutgers Coding Bootcamp Edition</h2> */}
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="about-information">
              <p>
                Accio, URL! Rutgers Coding Bootcamp Edition equips all of our fellow Full Stack Rutgers Coding Bootcamp classmates with fundamental links that were shared on our RUTSOM201807FSF4 slack channel throught the 24 week Full Stack Coding Bootcamp.
      <br></br>
      <br></br>
      This Application is broken down into Collections for each week of the part-time coding bootcamp. Additional tutorials for HTML5, CSS3, JavaScript, jQuery, Node.js, ES6,Responsive Design, Heroku, Git, User Authentication, Deployment, Express, MERN Stack, React.js, MySQL, MongoDB and other Languages covered in class. Panopto in class videos when the stream is working and other class related videos are available for your viewing pleasure.
      <br></br>
      <br></br>
      Thomson & I would both like to say congratulations on completing this Full Stack Rutgers Coding Bootcamp, that's no small feat! A huge thank you to Alex and all the TA's who made learning a tremendous amount of material throught this fast paced course a fun experience!
      <br></br>
      <br></br>
          </p>
              {/* ul for thomson/chelsea about info */}
              {/* chelsea */}
              <ul className="list-unstyled">
                <li className="media">
                <img src={picture} style={styles.picture}/>
                  {/* <img src="client/src/Components/Pages/images/chehlsee.jpg" className="mr-3" alt="..." /> */}
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">Chelsea Ciprich</h5>
                    For this Project I set up the React framework for the App, as well as the polished frontend and UI. I created the Accio, URL! Logo as well as the Branding. Two packages that we haven't discussed in class that are installed in the App are react-card-flip and create-react-app basic-modal. The react-card-flip is implimented on the Collections Page and the create-react-app basic-modal is used in the App for updating an existing Collection. 
    </div>
                </li>
                {/* thomson */}
                <li className="media my-4">
                  {/* <img src="https://via.placeholder.com/64x64" className="mr-3" alt="..." /> */}
                  
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">Thomson Thomas</h5>
                    For this Project I worked on creating the backed by a MySQL Database useing a Sequelize or Mongoose ORM. Set up of GET and POST routes for retrieving and adding new data (URLs). I also merged the two branches together and pushed the Final Project to the Master Branch before deploying.
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
