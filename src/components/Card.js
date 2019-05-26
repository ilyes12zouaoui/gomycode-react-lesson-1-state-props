import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-img-container">
          <img className="card-img" src={this.props.image} />
        </div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
