import React, { Component } from "react";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Search extends Component {
  render() {
    return (
      <form>
        <div className="mt-4 d-flex justify-content-center">
          <input type="search" className="search-btn" placeholder="Search" />
        </div>
      </form>
    );
  }
}

export { Search };
