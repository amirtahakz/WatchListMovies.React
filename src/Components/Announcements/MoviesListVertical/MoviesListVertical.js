import React, { Component } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";

function MoviesListVertical(params) {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12 mt-4 d-flex justify-content-center mb-3">
          <Link to="/" className="link">
            <h2 className="side-headers">Popular Movies</h2>
          </Link>
        </div>
        <div className="col-12">
          <Swiper
            mousewheel={true}
            direction="vertical"
            slidesPerView={5}
            className="popular-movies-slider"
          >
            {params.data.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MoviesListVertical;
