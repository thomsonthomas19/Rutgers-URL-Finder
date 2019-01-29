import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';

class Saved extends Component {
  state = {
    bookmarks: ""
  }

  // retrieve saved bookmarks on load
  componentDidMount() {
    this.getBookmark();
  }

  getBookmark = () => {
    API.getBookmarkById(this.props.match.params.id)
      .then(({ data }) => this.setState({ bookmarks: data }))
      .catch(err => console.log(err));
  }


  deleteBookmark = (bookmarkId) => {
    API.deleteBookmark(bookmarkId)
      .then(this.getBookmark)
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.bookmarks);
    // console.log(this.state.bookmarks.Category);
    // console.log(this.state.bookmarks.Category.Category);
    // console.log(this.state.bookmarks.Category.id);

    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4 text-center mb-3">{this.state.bookmarks.title}</h1>

          <a className="each-link-css-no-bs text-center mb-3" target="_blank" href={this.state.bookmarks.link}><h6>Visit Link</h6></a>

          <h4 className="text-justify" style={{ width: "70%", marginLeft: "15%", marginRight: "15%", lineHeight: "1.6", marginTop: "3%" }}>{this.state.bookmarks.description}</h4>

        </div>
        {!this.state.bookmarks
          ? (
            <h2 className="text-center"></h2>
          )
          : 
          <Link className="each-link-css-no-bs mb-3" style={{ fontSize: "1rem", marginTop: "3rem", marginLeft: "5%" }} to={"/collections/" + this.state.bookmarks.Category.id}>🠐 Back to {this.state.bookmarks.Category.Category}</Link>
        }

      </div>

    )
  }
}

export default Saved;
