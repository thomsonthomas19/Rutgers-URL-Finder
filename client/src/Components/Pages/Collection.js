import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { Input, TextArea, FormBtn } from "../Form";
import API from '../../Utils/API';

const styles = {
  modal: {
    display: "none",
    position: "fixed",
    zIndex: "1",
    paddingTop: "100px",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgb(0,0,0)",
    backgroundColor: "rgba(0,0,0,0.25)"
  },
  modalContent: {
    backgroundColor: "#fefefe",
    margin: "auto",
    padding: "20px",
    border: "1px solid #888",
    width: "80%"
  },
  close: {
    color: "#cc0033",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold"
  }
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: "99",
    width: "60%"
  }
};


class Saved extends Component {
  constructor() {
    super();

    this.state = {
      collections: [],
      modalIsOpen: false,
      title: "",
      link: "",
      description: ""
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  // retrieve saved collections on load
  componentDidMount() {
    this.getCollection();
  }

  getCollection = () => {
    API.getCollectionById(this.props.match.params.id)
      .then(({ data }) => this.setState({ collections: data }))
      .catch(err => console.log(err));
  }


  deleteBookmark = (bookmarkId) => {
    API.deleteBookmark(bookmarkId)
      .then(this.getCollection)
      .catch(err => console.log(err));
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
      description: ""
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.link && this.state.description) {
      API.saveBookmark({
        title: this.state.title,
        link: this.state.link,
        description: this.state.description,
        CategoryId: this.props.match.params.id
      })
      .then(this.getCollection)
      .catch(err => console.log(err))
      .then(this.closeModal)
      .catch(err => console.log(err))
      .then(this.resetFields)
      .catch(err => console.log(err));
      
      // .catch(err => console.log(err));
    }
  };

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
    console.log("modal set to true");
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
    console.log("modal set to false");
  };

  render() {

    return (

      <div>
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >

            <span onClick={this.closeModal} style={styles.close}>&times;</span>
            <h3 className="text-center">Add Bookmark to {this.state.collections.Category}</h3>
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
              <FormBtn
                disabled={!(this.state.link && this.state.title)}
                onClick={this.handleFormSubmit}>
                Add Bookmark
                      </FormBtn>
            </form>
          </Modal>
        </div>
        <div className="jumbotron jumbotron-fluid text-center mb-2"  style={{backgroundColor: "white"}}>
          <h1 className="display-4 text-center"  style={{color: "#cc0033"}}>{this.state.collections.Category}</h1>
        </div>
        {/* OPEN MODAL BUTTON */}
        <div style={{width: "100%"}} className="text-right">
        <button
          style={{backgroundColor: "#cc0033", color: "white", border: "none", borderRadius: "5px", marginRight: "5%", marginLeft: "auto"}}
          className="my-2"
          onClick={this.openModal}>
          Add Bookmark to {this.state.collections.Category}
        </button>
        </div>
        <div className="container-fluid" style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}>
          <div className="row text-center">


            {!Object.keys(this.state.collections).length
              ? (
                <h2 className="text-center">No bookmarks currently available</h2>
              )
              : this
                .state
                .collections
                .Bookmarks
                .map(bookmark => {
                  // this is the flip card information
                  return (
                    <div className="flip-card" key={bookmark.id}>
                      <div className="flip-card-inner">
                        <div className="flip-card-front" style={{ backgroundColor: "#cc0033" }}>
                          <h1 className="text-center" style={{ marginTop: "auto", marginBottom: "auto" }}>{bookmark.title}</h1>
                        </div>
                        <div className="flip-card-back">
                          <h3>{bookmark.title}</h3>
                          <div className="row">
                          <div className="col-6 text-center">
                          <Link className="each-link-css-no-bs" style={{ fontSize: "1rem", marginTop: "0.5rem" }} to={"/bookmarks/id/" + bookmark.id}><p style={{ fontSize: "0.9rem", margin: "0" }}>View Full</p></Link>
                          </div>
                          <div className="col-6 text-center">
                          {/* <button type="button" className="btn mr-auto px-2 py-0" style={{color: "#e9ecef", backgroundColor: "#cc0033", borderRadius: "13px"}} onClick={() => this.deleteBookmark(bookmark.id)}>ꭙ</button> */}
                          </div>

                          </div>

                          {/* <hr/> */}
                          <a href={bookmark.link} style={{ fontSize: "1rem" }} target="_blank" className="each-link-css-no-bs">Visit Link</a>
                          <p>{bookmark.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
            }
          </div>
        </div>
        <Link className="each-link-css-no-bs" style={{ fontSize: "1rem", marginTop: "3rem", marginLeft: "5%" }} to="/collections">← Back to Collections</Link>



        {/* {this.state.modal
          ? (
            <div style={styles.modal}>

              <div style={styles.modalContent}>
                <span onClick={this.modalFalse} style={styles.close}>&times;</span>
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
                  <FormBtn
                    disabled={!(this.state.link && this.state.title)}
                    onClick={this.handleFormSubmit}>
                    Add Bookmark
                      </FormBtn>
                </form>
              </div>

            </div>
          )
          : <div style={{width: "5px", height: "5px", backgroundColor: "blue"}}></div>
        } */}

      </div>


    )
  }
}

export default Saved;
