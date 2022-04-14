import React, { Component, Fragment } from "react";
import {
  faArrowLeft,
  faHeart,
  faImage,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function CastDetails(params) {
  const data = params.data;

  return (
    <Fragment>
      <div className="col-12">
        <div className="mt-2">
          <Link to="/" className="link back-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <span className="details-page-title">Cast Details</span>
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="col-5 col-md-12 col-xl-11">
          <Link to={'/image' + data.profile_path} className="link">
            <img
              src={
                data.profile_path === null
                  ? "../Assets/Images/user.png"
                  : "https://image.tmdb.org/t/p/w500/" + data.profile_path
              }
              className="img-fluid rounded-circle cast-details-page-image"
              alt={data.name}
              loading="lazy"
            />
          </Link>
        </div>
      </div>
      <div className="col-12 col-md-3 d-flex justify-content-center">
        <h1 className="text-light mt-3 mt-md-5">{data.name}</h1>
      </div>
      <div className="col-12 col-md-4 d-flex justify-content-center cast-buttons">
        <div className="row gx-5 mt-4">
          <div className="col-4">
            <Link to={"/moviesOfCast/" + data.id} className="link">
              <div className="cast-button d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faVideo} className="cast-button-icon" />
                <span>Movies</span>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to={"/castImages/" + data.id} className="link">
              <div className="cast-button d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faImage} className="cast-button-icon" />
                <span>Pictures</span>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/" className="link">
              <div className="cast-button d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faHeart} className="cast-button-icon" />
                <span>Add</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-3"></div>
      <div className="col-12 col-md-2 cast-buttons-md">
        <div className="row mt-4">
          <div className="col-12">
            <Link to={"/moviesOfCast/" + data.id} className="link">
              <div className="cast-button d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faVideo} className="cast-button-icon" />
                <span>Movies</span>
              </div>
            </Link>
          </div>
          <div className="col-12">
            <Link to={"/castImages/" + data.id} className="link">
              <div className="cast-button d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faImage} className="cast-button-icon" />
                <span>Pictures</span>
              </div>
            </Link>
          </div>
          <div className="col-12">
            <Link to="/" className="link">
              <div className="cast-button d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faHeart} className="cast-button-icon" />
                <span>Add</span>
              </div>
            </Link>
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
              Birthday :{" "}
              <span style={{ fontWeight: 100, fontSize: "1.25vw" }}>
                {data.birthday}
              </span>
            </p>
            <p className="information-title">
              Deathday :{" "}
              <span style={{ fontWeight: 100, fontSize: "1.25vw" }}>
                {data.deathday === null ? "Live" : data.deathday}
              </span>
            </p>
            <p className="information-title">
              Known For Department :{" "}
              <span style={{ fontWeight: 100, fontSize: "1.25vw" }}>
                {data.known_for_department}
              </span>
            </p>
            <p className="information-title">
              Place Of Birth :{" "}
              <span style={{ fontWeight: 100, fontSize: "1.25vw" }}>
                {data.place_of_birth}
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
      <div className="col-12 ms-4 ms-lg-0">
        <div className="row">
          <div className="col-12">
            <h1 className="text-light">Biography</h1>
          </div>
          <div className="col-12">
            <p className="text-light">{data.biography}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CastDetails;
