import React, { Fragment, useState, useEffect } from "react";
import {
  faArrowLeft,
  faHeart,
  faStar,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { CastService } from "../../Services/CastService";
import { useParams } from "react-router-dom";
import { MovieService } from "../../Services/MovieService";
import CastsListHorizontal from "./CastsListHorizontal/CastsListHorizontal";
import MoviesListHorizontal from "./MoviesListHorizontal/MoviesListHorizontal";

function MovieDetails(params) {
  let abortController = new AbortController();
  let { id } = useParams();
  const [CastsOfMovie, setCastsOfMovie] = useState([]);
  const [MovieRecommendationsById, setMovieRecommendationsById] = useState([]);

  useEffect(() => {
    CastService.GetCastsOfMovieById(id).then((response) =>
      setCastsOfMovie(response.data.cast)
    );

    MovieService.GetMovieRecommendationsById(id).then((response) =>
      setMovieRecommendationsById(response.data.results)
    );
    return () => {
      abortController.abort();
    };
  }, []);

  const data = params.data;
  return (
    <Fragment>
      <div className="col-12 ">
        <div className="mt-2">
          <Link to="/" className="link back-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <span className="details-page-title">Movie Details</span>
        </div>
      </div>
      <div className="col-5 col-xl-4 ms-1 ">
        <Link to={"/image" + data.poster_path}>
          <img
            src={
              data.poster_path === null
                ? "../Assets/Images/MoviePosterError.png"
                : "https://image.tmdb.org/t/p/w500/" + data.poster_path
            }
            className="img-fluid rounded-5 movie-details-page-image"
            alt={data.title}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="col-2 col-md-1"></div>
      <div className="col-4 mt-4 movie-buttons">
        <div className="row gy-2 gy-sm-4">
          <div className="col-12">
            <Link to="/" className="link">
              <div className="movie-button d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faVideo} className="movie-button-icon" />
                <span>Watch</span>
              </div>
            </Link>
          </div>
          <div className="col-12">
            <Link to="/" className="link">
              <div className="movie-button d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faStar} className="movie-button-icon" />
                <span>{data.vote_average}</span>
              </div>
            </Link>
          </div>
          <div className="col-12">
            <Link to="/" className="link">
              <div className="movie-button d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faHeart} className="movie-button-icon" />
                <span>Add</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-5 ms-4 ms-md-0">
        <div className="row">
          <div className="col-12">
            <h1 className="text-light mt-3 movie-name-text">{data.title}</h1>
          </div>
          <div className="col-12">
            <h2 className="text-light mt-3 opacity-75 year-name-text">
              {data.release_date}
            </h2>
          </div>
          <div className="col-12 movie-buttons-md">
            <div className="row gx-lg-5">
              <div className="col-4">
                <Link to="/" className="link">
                  <div className="movie-button-md d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faVideo}
                      className="movie-button-icon-md"
                    />
                    <span>Watch</span>
                  </div>
                </Link>
              </div>
              <div className="col-4">
                <Link to="/" className="link">
                  <div className="movie-button-md d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="movie-button-icon-md"
                    />
                    <span>{data.vote_average}</span>
                  </div>
                </Link>
              </div>
              <div className="col-4">
                <Link to="/" className="link">
                  <div className="movie-button-md d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="movie-button-icon-md"
                    />
                    <span>Add</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr
          className="border-1 border-top border-light"
          style={{ opacity: 1 }}
        />
      </div>
      <div className="col-12 ms-4 ms-lg-0">
        <div className="row">
          <div className="col-12">
            <h1 className="text-light">Summary</h1>
          </div>
          <div className="col-12">
            <p className="text-light">{data.overview}</p>
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr
          className="border-1 border-top border-light"
          style={{ opacity: 1 }}
        />
      </div>
      <div className="col-12 ms-4 ms-lg-0">
        <div className="row">
          <div className="col-12">
            <h1 className="text-light">Information</h1>
          </div>
          <div className="col-12">
            <p className="information-title">
              Genres :
              {data.genres?.map((item) => (
                <span
                  style={{ fontWeight: 100, fontSize: "1.25vw" }}
                  key={item.id}
                >
                  {" " + item.name}
                </span>
              ))}
            </p>
            <p className="information-title">
              Length :
              <span style={{ fontWeight: 100, fontSize: "1.25vw" }}>
                {" " + data.runtime + " min"}
              </span>
            </p>
            <p className="information-title">
              Adult :
              <span style={{ fontWeight: 100, fontSize: "1.25vw" }}>
                {data.adult === false ? " No" : " Yes"}
              </span>
            </p>
            <p className="information-title">
              Original Language :
              <span style={{ fontWeight: 100, fontSize: "1.25vw" }}>
                {" " + data.original_language}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr
          className="border-1 border-top border-light"
          style={{ opacity: 1 }}
        />
      </div>

      <CastsListHorizontal data={CastsOfMovie} />
      <div className="col-12">
        <hr
          className="border-1 border-top border-light"
          style={{ opacity: 1 }}
        />
      </div>
      <MoviesListHorizontal data={MovieRecommendationsById} />
    </Fragment>
  );
}

export default MovieDetails;
