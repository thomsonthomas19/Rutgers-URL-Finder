import React, {Component} from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';

class Saved extends Component {
  state = {
    collections: []
  }

  // retrieve saved collections on load
  componentDidMount() {
    this.getCollection();
  }

  getCollection = () => {
    API.getCollectionById(this.props.match.params.id)
      .then(({data}) => this.setState({collections: data}))
      .catch(err => console.log(err));
  }


  deleteCollection = (collectionId) => {
    API.deleteCollection(collectionId)
      .then(this.getCollection)
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.collections);

    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <h1 className="display-4 text-center">{this.state.collections.Category}</h1>
        </div>
        <div className="container-fluid">
          <div className="row">


            {!Object.keys(this.state.collections).length
              ? (
                <h2 className="text-center">No bookmarks currently available</h2>
              )
              : this
                .state
                .collections
                .Bookmarks
                .map(bookmark => {
                  return (
                    <div className="flip-card" key={bookmark.id}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front" style={{"backgroundColor": "pink"}}>
                        <h1 className="text-center align-items-middle">{bookmark.title}</h1>
                      </div>
                      <div className="flip-card-back">
                        <h3>{bookmark.title}</h3>
                        <a href="#">{bookmark.link}</a>
                        <p>{bookmark.description}</p>
                      </div>
                    </div>
                  </div>
                  )
                })
}
          </div>
        </div>
        <Link to="/collections">← Back to Collections</Link>
      </div>

    )
  }
}

export default Saved;
