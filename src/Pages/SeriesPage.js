import React, { Component, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../Components/Pagination/Pagination";
import SeriesList from "../Components/SeriesList/SeriesList";
import { SerialService } from "../Services/SerialService";

function SeriesPage(params) {
  let { page } = useParams();
  let abortController = new AbortController();
  const [TopRatedSeries, setTopRatedSeries] = useState([]);

  useEffect(() => {
    SerialService.GetTopRatedSeries(page).then((response) => {
      setTopRatedSeries(response.data.results);
    });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main className="col-12 col-md-6 col-lg-8 main-content">
      <div className="row mt-md-4">
        <SeriesList data={TopRatedSeries} />
        <Pagination route={'series'}/>
      </div>
    </main>
  );
}

export default SeriesPage;
