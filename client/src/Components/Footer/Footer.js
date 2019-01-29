// this will be used as a reusable Footer 
import React from "react";
import "../Footer/Footer.css";


const Footer = () => (
  <div className="Footer">
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            {/* about section with paragraph intro */}
            <h6>About</h6>
            <p className="text-justify">
            <i> Accio, URL!</i> <strong> Rutgers Coding Bootcamp Edition</strong> equips all of our fellow Full Stack Rutgers Coding Bootcamp classmates with fundamental links that were shared on our RUTSOM201807FSF4 slack channel throught the 24 week Full Stack Coding Bootcamp.
            <br>
            </br>
            <br>
            </br>
            This Application is broken down into Collections for each week of the part-time coding bootcamp. Additional tutorials for HTML5, CSS3, JavaScript, jQuery, Node.js, ES6,Responsive Design, Heroku, Git, User Authentication, Deployment, Express, MERN Stack, React.js, MySQL, MongoDB and other Languages covered in class. Panopto in class videos <i>when the stream is working</i> and other class related videos are available for your viewing pleasure.
            <br>
            </br>
            <br>
            </br>
            Thomson & I would both like to say congratulations on completing this Full Stack Rutgers Coding Bootcamp, that's no small feat! A huge thank you to Alex and all the TA's who made learning a tremendous amount of material throught this fast paced course a fun experience!


            

         
  </p>
          </div>
          {/* UL links to collections */}
          <div className="col-xs-6 col-md-3">
            <h6>Collections</h6>
            <ul className="footer-links">
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">01-html-git-css</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">02-css-bootstrap</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">03-javascript</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">04-jquery</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">05-timers</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">06-ajax</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">07-firebase</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">08-es6</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">09-node</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">10-js-constructors</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">11-mysql</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">12-express</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">13-handlebars</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">14-sequelize</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">15-mongo-mongoose</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">16-react</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">17-mern</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">18-misc.</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">06-ajax</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">19-class-video</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/html/html_intro.asp">20-panopto</a>
              </li>
            </ul>
          </div>
          {/* list of different pages on site */}
          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className='footer-links'>
              <li>
                <a href="/About">About Us</a>
              </li>
              <li>
                <a href="/About">Contact Us</a>
              </li>
              <li>
                <a href="/About">Contribute</a>
              </li>
              <li>
                <a href="/About">Privacy Policy</a>
              </li>
              <li>
                <a href="/About">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr style={{borderColor: "#cc0033"}}/>
      </div>
      {/* copyright */}
      <div className="container">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className='copyright-text'>Copyright &copy; 2019 All Rights Reserved by <a href='#'>Chelsea & Thomson</a>.
  </p>
        </div>
        {/* social icons
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#"><i className="fab fa-facebook"></i></a>
            </li>
            <li>
              <a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
            </li>
            <li>
              <a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
            </li>
            <li>
              <a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>

  </div>
);

export default Footer;