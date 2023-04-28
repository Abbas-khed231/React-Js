import React, { Component } from "react";

import Card from './Cards';

class Series extends Component {
  render() {
    const { list } = this.props;
    return (
      <div style={{ padding: "2rem" }}>
        <div>Series</div>
        <div style={{ padding: "1rem" }}>
          {list.map((l, idx) => (
            <Card name={l.series_name} img={l.img_url} key={`series-${idx}`} />
          ))}
          {/* <Card name={list[0].series_name}  img= {list[0].img_url}/> */}
        </div>
      </div>
    );
  }
}

export default Series;
