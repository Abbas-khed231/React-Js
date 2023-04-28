import React, { Component } from 'react';

import Series from './Series.js';
import Movies from './Movies.js';


class parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          series_name: "Stranger Things",
          img_url:
            "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
        },

        {
          series_name: "Money Heist",
          img_url:
            "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg"
        },
        {
          series_name: "The Sandman",
          img_url:
            "https://sm.ign.com/ign_es/gallery/t/the-sandma/the-sandman-2-new-posters_1965.jpg"
        },
        {
          series_name: "The Sandman",
          img_url:
            "https://sm.ign.com/ign_es/gallery/t/the-sandma/the-sandman-2-new-posters_1965.jpg"
        },
      ],

      movies: [
        {
          movies_name: "Vaathi",
          img_url:
            "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/fq9esxbx0aasgf1-one_one.jpg?VersionId=q9nx0k1KUZsZ0AztiKRQX1z3Bb4XDwu"
        },

        {
          movies_name: "Chor Nikal Ke Bhaga",
          img_url:
            "https://upload.wikimedia.org/wikipedia/en/a/a2/Chor_Nikal_Ke_Bhaga_film_poster.jpg"
        },
        {
          movies_name: "Dasvi",
          img_url:
            "https://m.media-amazon.com/images/M/MV5BZWE3OTg5ZTAtOThiYS00ODM5LWIyZmUtMWRiOTRlMGZhMTk0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
        },
        {
          movies_name: "RRR",
          img_url:
            "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
        }
      ],

      genres: [
        {
          name: "Thriller"
        },
        {
          name: "Comedy"
        }
      ]
    };
  }

  render() {
    const { series, movies } = this.state;
    return (
      <>
        <div style={{ backgroundColor: "", color: "", padding: "1rem" }}></div>
        <div style={{ color: "" }}>
          <img
            src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
            style={{ width: "6rem" }}
            alt="test"
          />
        </div>
        <div>
          <Series list={series} />
        </div>
        <div>
          <Movies list={movies} />
        </div>

        <div>{/* <Genres /> */}</div>
      </>
    )
  }
}
export default parent;