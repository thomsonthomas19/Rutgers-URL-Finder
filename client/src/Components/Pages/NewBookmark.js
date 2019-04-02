import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';
import { Input, TextArea, FormBtn } from "../Form";



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
    height: "50px"
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
    title: "",
    link: "",
    description: "",
    collection: ""
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

  resetFields = () => {
    this.setState({
      title: "",
      link: "",
      description: "",
      collection: ""
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.link && this.state.description && this.state.collection) {
      API.saveBookmark({
        title: this.state.title,
        link: this.state.link,
        description: this.state.description,
        CategoryId: this.state.collection
      })
        .then(this.resetFields)
        .catch(err => console.log(err));
    }
  };

  getCollections = () => {
    API.getSavedCollections()
      .then(({ data }) => this.setState({ collections: data }))
      .catch(err => console.log(err));
  }



  render() {

    return (
      <div>
        <div className="jumbotron jumbotron-fluid" style={{backgroundColor: "white"}} >
          <div>
            <h1 className="display-4 text-center" style={{color: "#cc0033"}}>Add a Bookmark</h1>
          </div>
          <hr />
          <div className="container-fluid">
            <div className="row align-items-stretch">
              {/* use ternary to check if collections are in state */}

              {!this.state.collections.length
                ? (
                  <h2 className="text-center">No Collections exist! Please make a Collection for bookmarks to go in</h2>
                )
                :
                <form style={{ width: "74%", marginLeft: "13%", marginRight: "13%", marginTop: "3%" }}>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Link Title"
                  />
                  <Input
                    value={this.state.link}
                    onChange={this.handleInputChange}
                    name="link"
                    placeholder="Link URL"
                  />
                  <TextArea
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="Link Description"
                  />
                  <div className="form-group">
                    <h5>Select Collection (select one):</h5>
                    <select className="form-control" name="collection" style={{borderColor: "#343a40"}} onChange={this.handleInputChange}>
                      <option></option>
                      {!this.state.collections.length
                        ? (
                          <p>please ignore this</p>
                        )
                        : this
                          .state
                          .collections
                          .map(collection => {
                            return (
                            <option value={collection.id} name="collection" key={collection.id}>{collection.Category}</option>
                            )
                          })
                      }
                    </select>

                  </div>
                  <FormBtn
                    disabled={!(this.state.link && this.state.title && (this.state.collection != ""))}
                    onClick={this.handleFormSubmit}>
                    Add Bookmark
              </FormBtn>
                </form>
              }
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Saved;
