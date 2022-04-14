import React, { Component } from "react";
import { Link } from "react-router-dom";

function CastCard(params) {
  const data = params.data;
  return (
    <div className="me-2">
      <Link to={"/"} onClick={() => {window.location.href="/CastDetails/"+ data.id}} className="link">
        <span className="card cast-card">
        <img
            src={data.profile_path === null ? "../Assets/Images/user.png" : "https://image.tmdb.org/t/p/w500/" + data.profile_path}
            className="img-fluid rounded-circle image-cast-card"
            alt={data.name}
          />
          <div className="card-body">
            <p className="card-text text-truncate">{data.name}</p>
          </div>
        </span>
      </Link>
    </div>
  );
}

export { CastCard };
