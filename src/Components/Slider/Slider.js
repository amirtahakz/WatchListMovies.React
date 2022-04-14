import React, { Component } from "react";
import { Link } from "react-router-dom";

function Slider(params) {
  return (
    <div className="d-flex justify-content-center">
      <div
        id="carouselExampleIndicators"
        className="carousel slide col-12 col-md-10 mt-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner rounded-5">
          {params.data.slice(0, 1).map((item) => (
            <div className="carousel-item active" key={item.id}>
              <Link to={"/"} onClick={() => {window.location.href="/MovieDetails/"+ item.id}}>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path}
                  className="d-block w-100"
                  alt={item.title}
                />
              </Link>
            </div>
          ))}
          {params.data.slice(1, 5).map((item) => (
            <div className="carousel-item" key={item.id}>
              <Link to={"/MovieDetails/" + item.id}>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path}
                  className="d-block w-100"
                  alt={item.title}
                />
              </Link>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
