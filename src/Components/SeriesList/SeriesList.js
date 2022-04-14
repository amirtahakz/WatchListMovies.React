import React, { Component, Fragment } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SerialCard from "../SerialCard/SerialCard";

function SeriesList(params) {
  return (
    <Fragment>
      <div className="col-12 ">
        <div className="mt-2">
          <Link to="/" className="link back-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <span className="details-page-title">Series List</span>
        </div>
      </div>
      <div className="row gx-4 row-cols-3 row-cols-md-4 mt-3 ms-3 pe-4">
        {params.data.map((item) => (
          <div className="col" key={item.id}>
            <SerialCard data={item} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default SeriesList;
