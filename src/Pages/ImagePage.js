import React from "react";
import { useParams } from "react-router-dom";

function ImagePage(params) {
  let { image } = useParams();

  return (
    <div className="full-page-img d-flex justify-content-center">
      <img
        src={
            image === null
            ? "../Assets/Images/user.png"
            : "https://image.tmdb.org/t/p/w500/" + image
        }
        className="img-fluid rounded-5"
        loading="lazy"
        alt={""}
      />
    </div>
  );
}

export default ImagePage;
