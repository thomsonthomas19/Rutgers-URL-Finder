import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';




// const styles = {
//   hero: {
//     // backgroundImage: `url(${dogpic})`,
//     backgroundSize: "cover",
//     fontFamily: "Georgia",
//     backgroundPosition: "center",
//     backgroundBlendMode: "multiply",
//     backgroundColor: "white",
//     color: "#cc0033",
//     textShadow: "0 0 100px grey",
//     height: "50px",
//   },
//   h3: {
//     justifyContent: 'center'
//   }
// }


class Saved extends Component {
  state = {
    collections: []
  }

  // retrieve saved collections on load
  componentDidMount() {
    this.getCollections();
  }



  getCollections = () => {
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
        <div className="jumbotron jumbotron-fluid text-center" >
        <div>
          <h1 className="display-4">Collections</h1>
          <hr/>
        </div>
        <div className="container-fluid">
        <div className="text-center">
          <form action="/action_page.php">
            Add New Category: <input type="text" name="FirstName" placeholder=" e.g. Express"/><br/>
            <input type="submit" value="Submit"/>
          </form>
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
                    <div className="col-12" key={collection.id}>
                      <div className="row ml-3">
                        <Link to={"/collections/" + collection.id}>
                        <h5 >{collection.Category}</h5>
                        </Link>
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
      </div>

    )
  }
}

export default Saved;
