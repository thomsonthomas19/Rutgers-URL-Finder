import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';
import { Input, FormBtn } from "../Form";



const styles = {
  hero: {
    // backgroundImage: `url(${dogpic})`,
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
  },
  btncolor: {
    backgroundColor: "#cc0033",
    color: "white",
    borderRadius: "10px"
  }
}


class Saved extends Component {
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
        <div className="jumbotron jumbotron-fluid text-center" style={{ backgroundColor: "white" }} >
          <div>
            <h1 className="display-4 mb-1" style={{ color: "#cc0033" }}>Collections</h1>
          </div>
          <hr />
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
                      //     <h5>{collection.Category}</h5>
                      //     </Link>
                      //     <div className="btn-group mr-auto ml-5" role="group">
                      //       <button type="button" className="btn mr-auto px-2 py-1" style={{color: "#e9ecef", backgroundColor: "#cc0033", borderRadius: "13px"}} onClick={() => this.deleteCollection(collection.id)}>ꭙ</button>
                      //     </div>
                      //   </div>
                      // </div>
                      <div className="flip-card" key={collection.id}>
                        <div className="flip-card-inner">
                          <div className="flip-card-front" style={{ backgroundColor: "#cc0033" }}>
                            <h1 className="text-center" style={{ marginTop: "auto", marginBottom: "auto" }}>{collection.Category}</h1>
                          </div>
                          <div className="flip-card-back">
                            <h3>{collection.Category}</h3>
                            <div className="row">
                              <div className="col-6 text-center">
                                <Link className="each-link-css-no-bs" style={{ fontSize: "1rem", marginTop: "0.5rem" }} to={"/collections/id/" + collection.id}><p style={{ fontSize: "0.9rem", margin: "0" }}>Go to Collection</p></Link>
                              </div>
                              <div className="col-6 text-center">
                                <button type="button" className="btn mr-auto px-2 py-0" style={{ color: "#e9ecef", backgroundColor: "#cc0033", borderRadius: "13px" }} onClick={() => this.deleteCollection(collection.id)}>ꭙ</button></div>

                            </div>
                          </div>
                        </div>
                      </div>
                            )
                          })
                      }
          </div>
                          <hr />
                          <form style={{ width: "74%", marginLeft: "13%", marginRight: "13%" }}>
                            <h2 className="text-center mt-2 mb-2">Add New Collection:</h2>
                            <Input
                              value={this.state.category}
                              onChange={this.handleInputChange}
                              name="category"
                              placeholder=" e.g. Express"
                            />
                            <FormBtn
                              disabled={!(this.state.category)}
                              onClick={this.handleFormSubmit}
                            >
                              Submit Collection
              </FormBtn>
                          </form>
                        </div>
                      </div>
      </div>
        
            )
          }
        }
        
export default Saved;