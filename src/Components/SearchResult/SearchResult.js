import React, { Component, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../../Services/MovieService";
import { CastService } from "../../Services/CastService";
import { SerialService } from "../../Services/SerialService";
import MoviesList from "./Movies/MoviesList";
import SeriesList from "../SearchResult/Series/SeriesList";
import CastsList from "./Casts/CastsList";

function SearchResult(params) {
  let { query } = useParams();
  let abortController = new AbortController();
  const [moviesResult, setMoviesResult] = useState([]);
  const [seriesResult, setSeriesResult] = useState([]);
  const [castsResult, setCastsResult] = useState([]);

  useEffect(() => {
    MovieService.SearchMoviesByName(query).then((response) => {
      setMoviesResult(response.data.results);
    });
    SerialService.SearchSeriesByName(query).then((response) => {
      setSeriesResult(response.data.results);
    });
    CastService.SearchCastsByName(query).then((response) => {
      setCastsResult(response.data.results);
    });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Fragment>
      <MoviesList data={moviesResult} />
      <div className="col-12">
        <hr
          className="border-1 border-top border-light"
          style={{ opacity: 1 }}
        />
      </div>
      <SeriesList data={seriesResult} />
      <div className="col-12">
        <hr
          className="border-1 border-top border-light"
          style={{ opacity: 1 }}
        />
      </div>
      <CastsList data={castsResult} />
    </Fragment>
  );
}

export default SearchResult;
