import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="col-12 col-md-12 ms-md-3">
        <nav>
          <ul class="nav">
            <li class="nav-item">
              <Link to="#" class="nav-link link col-auto active" aria-current="page">
                Tv Series
              </Link>
            </li>
            <li class="nav-item">
              <Link to="#" class="nav-link col-auto link">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link to="#" class="nav-link col-auto link">
                Animes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export { NavBar };
