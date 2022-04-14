import React, { Component } from "react";
import SearchResult from "../Components/SearchResult/SearchResult";

function SearchResultPage(params) {
  return (
    <main className="col-12 col-md-6 col-lg-8 main-content">
      <div className="row mt-md-4">
        <SearchResult />
      </div>
    </main>
  );
}

export default SearchResultPage;
