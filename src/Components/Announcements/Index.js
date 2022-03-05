import React, { Component, Fragment } from "react";
import { PopularMovies } from "./PopularMovies";
import { Search } from "./Search";

class Announcements extends Component {
  render() {
    return (
      <Fragment>
        <Search/>
        <PopularMovies/>
      </Fragment>
    );
  }
}

export { Announcements };
