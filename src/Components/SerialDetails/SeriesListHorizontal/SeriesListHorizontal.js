import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SerialCard from "../../SerialCard/SerialCard";

function SeriesListHorizontal(params) {
  const data = params.data;

  return (
    <Fragment>
      <div className="col-12 mb-3 ms-4 ms-lg-0">
        <h1 className="text-light">Suggested Series</h1>
      </div>
      <div className="col-12 d-flex justify-content-center mt-4">
        <Swiper
          modules={[A11y]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <SerialCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
}

export default SeriesListHorizontal;
