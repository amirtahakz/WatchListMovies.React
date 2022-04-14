import React, { Component, useState, useEffect, Fragment } from "react";
import MoviesList from "../Components/MoviesList/MoviesList";
import { MovieService } from "../Services/MovieService";
import { useParams } from "react-router-dom";

function MoviesOfCastPage(params) {
  let { id } = useParams();
  let abortController = new AbortController();
  const [moviesOfCast, setMoviesOfCast] = useState([]);

  useEffect(() => {
    MovieService.GetMoviesOfCastById(id).then((response) => {
      setMoviesOfCast(response.data.cast);
    });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main className="col-12 col-md-6 col-lg-8 main-content">
      <div className="row mt-md-4">
        <MoviesList data={moviesOfCast}/>
      </div>
    </main>
  );
}

export default MoviesOfCastPage;