import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  faFilm,
  faHome,
  faUsers,
  faVideo,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SideBar extends Component {
  // d-md-none d-block
  render() {
    return (
      <Fragment>
        <nav className="navbar-expand-md">
          <div className="menu-icon d-md-none d-block">
            <Link
              to="#menu"
              className="link"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </div>
          <div className="collapse" id="menu">
            <div>
              <Link to="/" className="link">
                <h2 className="logo-text">Logo</h2>
              </Link>
            </div>
            <div className="menu-header">
              <h5>Menu</h5>
            </div>
            <div>
              <ul>
                <Link to="/" className="link">
                  <li>
                    <FontAwesomeIcon icon={faHome} />{" "}
                    <span className="ms-1">Home</span>
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <FontAwesomeIcon icon={faUsers} />{" "}
                    <span className="ms-1">Actors</span>
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <FontAwesomeIcon icon={faVideo} />{" "}
                    <span className="ms-1">Movies</span>
                  </li>
                </Link>
                <Link to="/" className="link">
                  <li>
                    <FontAwesomeIcon icon={faFilm} />{" "}
                    <span className="ms-1">Series</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export { SideBar };
