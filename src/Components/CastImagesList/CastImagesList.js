import React, { Component, useState, useEffect, Fragment } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function CastImagesList(params) {
  return (
    <Fragment>
      <div className="col-12 ">
        <div className="mt-2">
          <Link to="/" className="link back-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <span className="details-page-title">Cast Images</span>
        </div>
      </div>
      <div className="row gx-4 row-cols-3 row-cols-md-4 mt-3 ms-3 pe-5">
        {params.data.map((item, index) => (
          <Link to={'/image' + item.file_path} key={index}>
            <div className="col mb-3">
              <img
                src={
                  item.profile_path === null
                    ? "../Assets/Images/user.png"
                    : "https://image.tmdb.org/t/p/w500/" + item.file_path
                }
                className="img-fluid rounded-5"
                loading="lazy"
                alt={""}
              />
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

export default CastImagesList;
