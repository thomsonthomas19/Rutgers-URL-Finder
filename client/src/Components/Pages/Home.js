import React from 'react';
import picture from './images/computer.jpg';

const styles = {
  hero: {
    // backgroundImage: `url(${dogpic})`,
    backgroundSize: "cover",
    fontFamily: "Georgia",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
    backgroundColor: "white",
    backgroundImage: `url(${picture})`,
    color: "#cc0033",
    textShadow: "0 0 100px grey",
  },
  h3: {
    justifyContent: 'center'
  },
  jumbotron: {
    backgroundImage: `url(${picture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
    padding: "100px",
    margins: "100px",
  },
  container: {
    backgroundColor: "#cc0033",
    padding: "50px",
    margins: "50px",
    opacity: ".9",
  },
  form: {
    backgroundColor: "#cc0033",
  },
  submitButton: {
    textAlign: "center",
    justifyContent: "center"
  }
}

const Home = () => {
  return (

    <div>
      {/* <div className="jumbotron jumbotron-fluid"> */}
      <div className="jumbotron" style={styles.jumbotron}>
        <div className="container" style={styles.container}>
          <div className="row">
            <div className="col-sm-6 col-md-7 col-lg-8 col-sm-push-6 col-md-push-5 col-lg-push-4 bootcamp-content">
              <h3>RUTGERS CODING BOOTCAMP</h3>
              <h1 className="display-4">
                Become a Fullstack Web Developer in 24 Weeks</h1>
              <p className="lead">Part-Time: August 2018 to February 2019 at the Rutgers Somerset Campus</p>
              <hr className="my-4">
              </hr>
              {/* </div> */}
              {/* jumbotron newsletter form */}
              <form>
                <div className="form" style={styles.form}>
                  <div className="col-sm-5 col-md-6 col-lg-7 learnMore-form">
                    <div className="lead_form get-class-collections-info">
                      <div className="content">
                        <h2 className="form-get-info-title Title" aria-label="Get Class Information">Newsletter</h2>
                        <div className="form-get-info">
                          <form className="email-leads-form">
                            <div className="form-group row">
                              <label>
                                Name:
              <input type="text" name="name" />
                              </label>
                              <label>
                                eMail:
              <input type="text" email="email" />
                              </label>
                              <input type="submit" value="Submit" className="btn btn-secondary btn-lg btn-block" />
                            </div>
                          </form>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* github card */}
<div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>GITHUB</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* html card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>HTML</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* CSS card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>CSS</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* Javascript card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>JAVASCRIPT</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* JQUERY card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>JQUERY</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* TIMERS card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>TIMERS</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* AJAX card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>AJAX</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* FIREBASE card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>FIREBASE</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* ES6 card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>ES6</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* NODE card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>NODE</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* JS CONSTRUCTORS card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>JS CONTRUCTORS</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* MYSQL card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>MySQL</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* EXPRESS card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>EXPRESS</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* HANDLEBARS card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>HANDLEBARS</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* SEQUELIZE card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>SEQUELIZE</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* MONGO card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>MONGO</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* MONGOOSEcard */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>MONGOOSE</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* REACT card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>REACT</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* MERN card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>MERN</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

      {/* PANOPTO card */}
      <div className="flip-card-home">
<div className="flip-card-home-inner">
<div className="flip-card-home-front">
<h1>PANOPTO</h1>
</div>
<div className="flip-card-home-back">
</div>
</div>
</div>

    </div>

  )
}

export default Home;
