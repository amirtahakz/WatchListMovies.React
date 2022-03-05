import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { SideMovieCard } from "./SideMovieCard";

class PopularMovies extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Link to="/" className="link">
            <h2 className="side-headers">Popular Movies</h2>
          </Link>
        </div>
        <SideMovieCard />
      </Fragment>
    );
  }
}

export { PopularMovies };
