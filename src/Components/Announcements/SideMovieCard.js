import React, { Component } from "react";

class SideMovieCard extends Component {
  render() {
    return (
      <div class="card side-movie-card ms-3 me-3">
        <div class="row g-0">
          <div class="col-md-6">
            <img
              src={"../Assets/Images/batman-poster.jpg"}
              class="img-fluid rounded-5 image-side-movie-card"
              alt="..."
            />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title fs-6 text-light">The Batman</h5>
              <p class="card-text">
                <small class="text-light">2022</small>
              </p>
              <p class="card-text">
                <small>
                  <img
                    src={"../Assets/Images/imdb.png"}
                    class="img-fluid rounded-5 image-imdb-side-movie-card"
                    alt="..."
                  />
                </small>
                <small class="ms-2 text-light">7.1</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { SideMovieCard };
