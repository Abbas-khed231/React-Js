import React, { Component } from "react";

class Card extends Component {
  render() {
    const {img, name} = this.props;
    return (
      <div style={{ display: "inline-block", marginRight: "2rem" }}>
        <img
          src={img}
          style={{ width: "12rem", height: "15rem" }}
          alt="test" 
        />
        <p> {name} </p>
      </div>
    );
  }
}
export default Card;