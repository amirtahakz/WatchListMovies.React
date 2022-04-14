import React, { Component } from "react";
import { Link } from "react-router-dom";

function MovieCard(params) {
  const data = params.data;
  const movieYear = data.release_date.substr(0, 4);
  return (
    <Link to={"/"} onClick={() => {window.location.href="/MovieDetails/"+ data.id}} className="link">
      <div className="card side-movie-card mb-2 justify-content-md-center mt-md-2">
        <div className="row g-0">
          <div className="col col-md-7 col-lg-6 image-div">
            <img
              src={data.poster_path === null ? "../Assets/Images/MoviePosterError.png" : "https://image.tmdb.org/t/p/w500/" + data.poster_path}
              className="img-fluid rounded-5 image-side-movie-card"
              alt={data.title}
              loading="lazy"
            />
          </div>
          <div className="col col-md-5 col-lg-6">
            <div className="card-body">
              <h5 className="side-card-title fs-6 text-light text-truncate">
                {data.title}
              </h5>
              <div className="mt-3 mt-md-4">
                <p className="side-small-text">{movieYear}</p>
              </div>
              <div className="row g-2">
                <div className="col-5">
                  <img
                    src={"../Assets/Images/imdb.png"}
                    className="img-fluid rounded-3 image-imdb-side-movie-card"
                    alt={"imdb" + data.title}
                    loading="lazy"
                  />
                </div>
                <div className="col-7">
                  <small className="side-small-text">{data.vote_average}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

 

export default MovieCard;
