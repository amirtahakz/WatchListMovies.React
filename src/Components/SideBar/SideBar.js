import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  faFilm,
  faHome,
  faUsers,
  faVideo,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileIcon from "../SideBar/ProfileIcon/ProfileIcon";


class SideBar extends Component {
  render() {
    return (
      <aside className="col-12 col-md-3 col-lg-2 border-end sticky-top side-nav">
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
            <ul className="side-nav-ul">
              <Link to="/" className="link">
                <li className="side-nav-li">
                  <FontAwesomeIcon icon={faHome} />{" "}
                  <span className="ms-1">Home</span>
                </li>
              </Link>
              <Link to="/casts/1" className="link">
                <li className="side-nav-li">
                  <FontAwesomeIcon icon={faUsers} />{" "}
                  <span className="ms-1">Casts</span>
                </li>
              </Link>
              <Link to="/movies/1" className="link">
                <li className="side-nav-li">
                  <FontAwesomeIcon icon={faVideo} />{" "}
                  <span className="ms-1">Movies</span>
                </li>
              </Link>
              <Link to="/series/1" className="link">
                <li className="side-nav-li">
                  <FontAwesomeIcon icon={faFilm} />{" "}
                  <span className="ms-1">Series</span>
                </li>
              </Link>
            </ul>
            <div className="profile-icon-area ms-3">
              <ProfileIcon />
            </div>
          </div>
        </nav>
      </aside>
    );
  }
}

export default SideBar;
