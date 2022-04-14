import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="col-12 col-md-12 ms-md-3 d-flex justify-content-center justify-content-md-start">
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="#" className="nav-link link col-auto active" aria-current="page">
                Tv Series
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link col-auto link">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link col-auto link">
                Animes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
