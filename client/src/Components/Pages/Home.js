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

            </div>
            <div className="col-sm-6 col-md-7 col-lg-8 col-sm-push-6 col-md-push-5 col-lg-push-4 bootcamp-content">
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
      {/* html-git-css*/}
<div className="flip-card-home">
<div className="flip-card-home-front">
<h1>01-html-git-css</h1>
<a href="/collections/id/2">click</a>
</div>
</div>

      {/* css-bootstrap */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>02-css-bootstrap</h1>
<a href="/collections/id/3">click</a>
</div>
</div>

      {/* javascript */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>03-javascript</h1>
<a href="/collections/id/4">click</a>
</div>
</div>

      {/* jQuery */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>04-jQuery</h1>
<a href="/collections/id/5">click</a>
</div>
</div>

      {/* timers */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>05-timers</h1>
<a href="/collections/id/6">click</a>
</div>
</div>

      {/* ajax */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>06-ajax</h1>
<a href="/collections/id/7">click</a>
</div>
</div>

      {/* firebase */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>07-firebase</h1>
<a href="/collections/id/8">click</a>
</div>
</div>

      {/* es6 card */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>08-es6</h1>
<a href="/collections/id/9">click</a>
</div>
</div>

      {/* node card*/}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>09-node</h1>
<a href="/collections/id/10">click</a>
</div>
</div>

      {/* js constructors card */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>10-js-constructors</h1>
<a href="/collections/id/11">click</a>
</div>
</div>

      {/* mysql card */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>11-mysql</h1>
<a href="/collections/id/12">click</a>
</div>
</div>

      {/* express card */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>12-express</h1>
<a href="/collections/id/13">click</a>
</div>
</div>

      {/* handlebars card */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>13-handlebars</h1>
<a href="/collections/id/14">click</a>
</div>
</div>

      {/* sequelize card */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>14-sequelize</h1>
<a href="/collections/id/15">click</a>
</div>
</div>

      {/* mongo mongoose card */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>15-mongo-mongoose</h1>
<a href="/collections/id/16">click</a>
</div>
</div>

      {/* react card */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>16-react</h1>
<a href="/collections/id/17">click</a>
</div>
</div>

      {/* mern card */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>17-mern</h1>
<a href="/collections/id/18">click</a>
</div>
</div>

      {/* misc card */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>18-misc</h1>
<a href="/collections/id/19">click</a>
</div>
</div>

      {/* videos from classcard */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>19-videos-from-class</h1>
<a href="/collections/id/20">click</a>
</div>
</div>

      {/* PANOPTO card */}
      <div className="flip-card-home">
<div className="flip-card-home-front">
<h1>20-panopto</h1>
<a href="/collections/id/21">click</a>
</div>
</div>

    </div>

  )
}

export default Home;
