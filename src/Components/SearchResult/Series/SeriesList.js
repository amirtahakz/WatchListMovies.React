import React, { Component, Fragment } from "react";
import SerialCard from "../../SerialCard/SerialCard";

function SeriesList(params) {
  return (
    <Fragment>
      <div className="col-12 d-flex justify-content-center">
        <div className="mt-2">
          <span className="details-page-title">Series List</span>
        </div>
      </div>
      <div className="row gx-4 row-cols-4 mt-3 ms-3 pe-4">
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
