import React, { Component, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search(params) {
  const [state, setState] = useState({ search: {}, errors: {} });

  const changeHandler = (event) => {
    const formData = { [event.target.name]: event.target.value };
    setState({ ...state, search: { ...state.search, ...formData } });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    window.location.href = `/search/${state.search.query}`;
  };

  return (
    <div className="col-12 mt-4 d-flex justify-content-center">
      <form onSubmit={submitHandler}>
        <div className="input-group flex-nowrap">
          <span
            className="input-group-text search-text"
            id="addon-wrapping"
            style={{ borderRight: "none" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            className="form-control search-text"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="addon-wrapping"
            onChange={changeHandler}
            name="query"
            style={{ borderLeft: "none", paddingLeft: "0" }}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
