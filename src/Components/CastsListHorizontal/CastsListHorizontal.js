import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { CastCard } from "../CastCard/CastCard";

function CastsListHorizontal(params) {
  return (
    <div className="col-12 d-flex justify-content-center mt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-3 ms-md-3">
            <Link to="/" className="link">
              <h2 className="side-headers">Popular Casts</h2>
            </Link>
          </div>
          <div className="col-12 ms-md-3 pe-md-5">
            <Swiper
              modules={[A11y]}
              loop={true}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 6,
                },
              }}
            >
              {params.data.map((item) => (
                <SwiperSlide key={item.id}>
                  <CastCard data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CastsListHorizontal;
