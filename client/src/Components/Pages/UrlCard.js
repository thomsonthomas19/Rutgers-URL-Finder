// import React from 'react';

// // allows you to use the card flipping animation
// import ReactCardFlip from 'react-card-flip';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isFlipped: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
 
//   handleClick(e) {
//     e.preventDefault();
//     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//   }
 
//   render() {
//     return (
//       <ReactCardFlip isFlipped={this.state.isFlipped}>
//         <YOUR_FRONT_CCOMPONENT key="front">
//           This is the front of the card.
//           <button onClick={this.handleClick}>Click to flip</button>
//         </FrontComponent>
 
//         <YOUR_BACK_COMPONENT key="back">
//           This is the back of the card.
//           <button onClick={this.handleClick}>Click to flip</button>
//         </BackComponent>
//       </ReactCardFlip>
//     )
//   }
// }

// export default UrlCard;