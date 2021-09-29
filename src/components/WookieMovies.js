import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SliderCom from "./sliderComponent/SliderCom";

function WookieMovies() {
  const [movieList, setMovieList] = useState([]);

  const getMoviesData = () => {
    axios
      .get(" https://wookie.codesubmit.io/movies", {
        headers: {
          Authorization: "Bearer Wookie2019",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setMovieList(data.movies);
      });
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <Fragment>
      <Link to="#">
        <h1 className="slider-headers">Latest Movies in Movie Mojo</h1>
      </Link>
      <SliderCom movies={movieList} />
      <Link to="#">
        <h1 className="slider-headers">Popular Movies</h1>
      </Link>
      <SliderCom className="container-2" movies={movieList} />
      <Link to="#">
        <h1 className="slider-headers">Top Viewed Movies</h1>
      </Link>
      <SliderCom className="container-3" movies={movieList} />

      <Link to="#">
        <h1 className="slider-headers">Action Thrillers</h1>
        <SliderCom className="container-4" movies={movieList} />
      </Link>

      <Link to="#">
        <h1 className="slider-headers">Movie Mojo Exclusive</h1>
        <SliderCom className="container-5" movies={movieList} />
      </Link>
    </Fragment>
  );
}

export default WookieMovies;
