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
import CastsListHorizontal from "./CastsListHorizontal/CastsListHorizontal";
import SeriesListHorizontal from "./SeriesListHorizontal/SeriesListHorizontal";
import { SerialService } from "../../Services/SerialService";

function SerialDetails(params) {
  let abortController = new AbortController();
  let { id } = useParams();
  const [CastsOfSerial, setCastsOfSerial] = useState([]);
  const [SerialRecommendationsById, setSerialRecommendationsById] = useState(
    []
  );

  useEffect(() => {
    CastService.GetCastsOfSerialById(id).then((response) =>
      setCastsOfSerial(response.data.cast)
    );

    SerialService.GetSerialRecommendationsById(id).then((response) =>
      setSerialRecommendationsById(response.data.results)
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
          <span className="details-page-title">Serial Details</span>
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
            alt={data.name}
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
            <h1 className="text-light mt-3 movie-name-text">{data.name}</h1>
          </div>
          <div className="col-12">
            <h2 className="text-light mt-3 opacity-75 year-name-text">
              {data.first_air_date}
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
              {data.episode_run_time?.map((item, index) => (
                <span
                  style={{ fontWeight: 100, fontSize: "1.25vw" }}
                  key={index}
                >
                  {" " + item}
                </span>
              ))}
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
      <CastsListHorizontal data={CastsOfSerial} />
      <div className="col-12">
        <hr
          className="border-1 border-top border-light"
          style={{ opacity: 1 }}
        />
      </div>
      <SeriesListHorizontal data={SerialRecommendationsById} />
    </Fragment>
  );
}

export default SerialDetails;
