import React, { Component } from "react";

import Card from './Cards';

class Movies extends Component {
  render() {
    const { list } = this.props;
    return (
      <div style={{ padding: "2rem" }}>
        <div>Movies</div>
        <div style={{ padding: "1rem" }}>
          {list.map((l, idx) => (
            <Card name={l.movies_name} img={l.img_url} key={`movies-${idx}`} />
          ))}

        </div>
      </div>
    );
  }
}

export default Movies;