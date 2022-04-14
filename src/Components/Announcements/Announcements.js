import React, { Component } from "react";
import { MovieService } from "../../Services/MovieService";
import Search from "../Search/Search";
import MoviesListVertical from "./MoviesListVertical/MoviesListVertical";

class Announcements extends Component {
  fetchData() {
    MovieService.GetPopularMovies().then((response) =>
      this.setState({ PopularMovies: response.data.results })
    );
  }

  state = {
    PopularMovies: [],
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <aside className="col-12 col-md-3 col-lg-2 border-start d-none d-md-block Announcements">
        <div className="row">
          <Search />
          <MoviesListVertical data={this.state.PopularMovies} />
        </div>
      </aside>
    );
  }
}

export default Announcements;
