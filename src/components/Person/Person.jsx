// rafce snippet

// const Person = (props) => {
//   return (
//     <div>
//       <h1> Hola!</h1>
//       <span>{props.personData.name}</span><br/>
//       <span>{props.personData.surname}</span><br/>
//       <span>{props.personData.age}</span>
//     </div>
//   );
// };

// export default Person;

import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        <h1> Hola!</h1>
        <span>{this.props.personData.name}</span>
        <br />
        <span>{this.props.personData.surname}</span>
        <br />
        <span>{this.props.personData.age}</span>
      </div>
    );
  }
}

export default Person;
