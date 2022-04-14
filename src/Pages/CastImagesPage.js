import React, { Component, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import CastImagesList from "../Components/CastImagesList/CastImagesList";
import { CastService } from "../Services/CastService";

function CastImagesPage(params) {
  let { id } = useParams();
  let abortController = new AbortController();
  const [images, setImages] = useState([]);

  useEffect(() => {
    CastService.GetImagesOfCast(id).then((response) => {
      setImages(response.data.profiles);
    });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main className="col-12 col-md-6 col-lg-8 main-content">
      <div className="row mt-md-4">
        <CastImagesList data={images}/>
      </div>
    </main>
  );
}

export default CastImagesPage;
