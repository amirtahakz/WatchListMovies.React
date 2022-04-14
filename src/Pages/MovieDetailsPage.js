import React, { Component, useState, useEffect } from "react";
import MovieDetails from "../Components/MovieDetails/MovieDetails";
import { useParams } from "react-router-dom";
import { MovieService } from "../Services/MovieService";

function MovieDetailsPage(params) {
  let abortController = new AbortController();
  let { id } = useParams();
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    MovieService.GetMovieDetailsById(id).then((response) =>
      setDetails(response.data)
    );
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <main className="col-12 col-md-6 col-lg-7 main-content">
      <div className="row mt-md-4">
        <MovieDetails data={Details} />
      </div>
    </main>
  );
}

export default MovieDetailsPage;
