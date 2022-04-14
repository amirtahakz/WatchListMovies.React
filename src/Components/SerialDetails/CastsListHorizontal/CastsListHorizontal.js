import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { CastCard } from "../../CastCard/CastCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

function CastsListHorizontal(params) {
  const data = params.data;
  return (
    <Fragment>
      <div className="col-12 mb-3 ms-4 ms-lg-0">
        <h1 className="text-light">Casts</h1>
      </div>
      <div className="col-12 d-flex justify-content-center mt-4">
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
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CastCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
}

export default CastsListHorizontal;
