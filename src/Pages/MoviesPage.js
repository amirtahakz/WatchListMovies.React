import React, { Component, useState, useEffect, Fragment } from "react";
import MoviesList from "../Components/MoviesList/MoviesList";
import { MovieService } from "../Services/MovieService";
import { useParams } from "react-router-dom";
import Pagination from "../Components/Pagination/Pagination";

function MoviesPage(params) {
  let { page } = useParams();
  let abortController = new AbortController();
  const [TopRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    MovieService.GetTopRatedMovies(page).then((response) => {
      setTopRatedMovies(response.data.results);
    });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main className="col-12 col-md-6 col-lg-8 main-content">
      <div className="row mt-md-4">
        <MoviesList data={TopRatedMovies}/>
        <Pagination route={'movies'}/>
      </div>
    </main>
  );
}

export default MoviesPage;
