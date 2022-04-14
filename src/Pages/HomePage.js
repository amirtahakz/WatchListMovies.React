import React, { Component } from "react";
import CastsListHorizontal from "../Components/CastsListHorizontal/CastsListHorizontal";
import MoviesListHorizontal from "../Components/MoviesListHorizontal/MoviesListHorizontal";
import NavBar from "../Components/NavBar/NavBar";
import Slider from "../Components/Slider/Slider";
import { CastService } from "../Services/CastService";
import { MovieService } from "../Services/MovieService";
import { SerialService } from "../Services/SerialService";

class HomePage extends Component {
  fetchData() {
    CastService.GetPopularCasts(1).then((response) =>
      this.setState({ PopularCasts: response.data.results })
    );
    MovieService.GetActionMovies().then((response) =>
      this.setState({ ActionMovies: response.data.results })
    );
    MovieService.GetAnimationMovies().then((response) =>
      this.setState({ AnimationMovies: response.data.results })
    );
    MovieService.GetHorrorMovies().then((response) =>
      this.setState({ HorrorMovies: response.data.results })
    );
    MovieService.GetRomanceMovies().then((response) =>
      this.setState({ RomanceMovies: response.data.results })
    );
    SerialService.GetSeries().then((response) =>
      this.setState({ Series: response.data.results })
    );
    MovieService.GetUpcomingMovies().then((response) =>
      this.setState({ UpcomingMovies: response.data.results })
    );
  }

  state = {
    PopularCasts: [],
    ActionMovies: [],
    HorrorMovies: [],
    RomanceMovies: [],
    AnimationMovies: [],
    Series: [],
    UpcomingMovies: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <main className="col-12 col-md-6 col-lg-8 main-content">
        <div className="row mt-md-4">
          <NavBar />
          <Slider data={this.state.UpcomingMovies} />
          <CastsListHorizontal data={this.state.PopularCasts} />
          <MoviesListHorizontal data={this.state.Series} genreName={"Series"} />
          <MoviesListHorizontal data={this.state.ActionMovies} genreName={"Action"} />
          <MoviesListHorizontal data={this.state.AnimationMovies} genreName={"Animation"} />
          <MoviesListHorizontal data={this.state.RomanceMovies} genreName={"Romance"} />
          <MoviesListHorizontal data={this.state.HorrorMovies} genreName={"Horror"} />
        </div>
      </main>
    );
  }
}

export default HomePage;
