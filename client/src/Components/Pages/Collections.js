import React, {Component} from 'react';
import API from '../../utils/API';

class Saved extends Component {
  state = {
    collections: []
  }

  // retrieve saved books on load
  componentDidMount() {
    this.getCollections();
  }

  getCollections = () => {
    API.getSavedCollections()
      .then(({data}) => this.setState({collections: data}))
      .catch(err => console.log(err));
  }

  // handle deleting a book
  deleteCollection = (collectionId) => {
    API.deleteCollection(collectionId)
      .then(this.getCollections)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <h1 className="display-4 text-center">Collections</h1>
        </div>
        <div className="container-fluid">
          <div className="row align-items-stretch">
            {/* use ternary to check if collections are in state */}

            {!this.state.collections.length
              ? (
                <h2 className="text-center">This means it failed</h2>
              )
              : this
                .state
                .collections
                .map(collection => {
                  return (
                    <div className="col-12" key={collection.id}>
                      <div className="row ml-3">
                        <h5 >{collection.Category}</h5>
                          <div className="btn-group" role="group">
                            <button type="button" className="btn" onClick={() => this.deleteCollection(collection.id)}>x</button>
                          </div>
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

export default Saved;