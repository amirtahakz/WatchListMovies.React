import CastsList from "../Components/CastsList/CastsList";
import React, { Component, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CastService } from "../Services/CastService";
import Pagination from "../Components/Pagination/Pagination";


function CastsPage(params) {
  let { page } = useParams();
  let abortController = new AbortController();
  const [PopularCasts, setPopularCasts] = useState([]);

  
  useEffect(() => {
    CastService.GetPopularCasts(page).then((response) => {
      setPopularCasts(response.data.results);
    });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main className="col-12 col-md-6 col-lg-8 main-content">
      <div className="row mt-md-4">
          <CastsList data={PopularCasts}/>
          <Pagination route={'casts'}/>
      </div>
    </main>
  );
}


export default CastsPage;