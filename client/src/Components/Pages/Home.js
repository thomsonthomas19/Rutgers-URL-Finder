import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../Utils/API';
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

class Home extends Component {

  state = {
    collections: [],
    category: ""
  }

  // retrieve saved collections on load
  componentDidMount() {
    this.getCollections();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.category) {
      API.saveCollection({
        Category: this.state.category
      })
        .then(res => this.getCollections())
        .catch(err => console.log(err))
        .then(this.resetFields)
        .catch(err => console.log(err));


    }
  };

  resetFields = () => {
    this.setState({
      category: ""
    })
  }

  getCollections = () => {
    console.log("GET WORKING");
    API.getSavedCollections()
      .then(({ data }) => this.setState({ collections: data }))
      .catch(err => console.log(err));
  }

  // handle deleting a book
  deleteCollection = (collectionId) => {
    API.deleteCollection(collectionId)
      .then(this.getCollections)
      .catch(err => console.log(err));
  }


  render() {
    console.log(this.state.collections);


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
        <div className="container-fluid mt-4">
          <div className="text-center">
          </div>
          <div className="row align-items-stretch">
            {/* use ternary to check if collections are in state */}

            {!this.state.collections.length
              ? (
                <h2 className="text-center">Collections Incoming</h2>
              )
              : this
                .state
                .collections
                .map(collection => {
                  return (
                    // <div className="col-12" key={collection.id}>
                    //   <div className="row ml-3 my-1">
                    //     <Link to={"/collections/id/" + collection.id} className="each-link-css-no-bs ml-auto">
                    //       <h5>{collection.Category}</h5>
                    //     </Link>
                    //     <div className="btn-group mr-auto ml-5" role="group">
                    //       {/* <button type="button" className="btn mr-auto px-2 py-1" style={{color: "#e9ecef", backgroundColor: "#cc0033", borderRadius: "13px"}} onClick={() => this.deleteCollection(collection.id)}>ꭙ</button> */}
                    //     </div>
                    //   </div>
                    // </div>
                    <div className="flip-card" key={collection.id}>
                     
                        <div className="flip-card-front" style={{ backgroundColor: "#cc0033" }}>
                        <Link className="each-link-css-no-bs" style={{ fontSize: "1rem", marginTop: "0.5rem", color: "white" }} to={"/collections/id/" + collection.id}><h1 >{collection.Category}</h1></Link>
                        </div>

                      
                    </div>
                  )
                })
            }
          </div>
        </div>

      </div>

    )
  }
}
  export default Home;
