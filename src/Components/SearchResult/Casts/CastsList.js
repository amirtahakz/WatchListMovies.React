import React, { Component, Fragment } from "react";
import CastCard from "./CastCard";

function CastsList(params) {
  return (
    <Fragment>
      <div className="col-12 d-flex justify-content-center">
        <div className="mt-2">
          <span className="details-page-title">Casts List</span>
        </div>
      </div>
      <div className="row gx-4 row-cols-5 mt-3 ms-3 pe-4">
        {params.data.map((item) => (
          <div className="col" key={item.id}>
            <CastCard data={item} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default CastsList;
