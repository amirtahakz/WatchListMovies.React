import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CookiesManger } from "../../../Utilities/Cookies/Cookies";

function ProfileIcon(params) {
  let abortController = new AbortController();
  const [user, setUser] = useState({});

  useEffect(() => {
    CookiesManger.GetUserCookie().then((result) => {
      if (result) {
        setUser({ email: result.email });
      }
    });
    return () => {
      abortController.abort();
    };
  }, []);

  const signOutHandler = () => {
    CookiesManger.RemoveUserCookie();
    window.location.href = "/";
  };

  if (user.email === undefined) {
    return (
      <div className="profile-icon text-light">
        <strong>
          <Link to={"Login"} className="link">
            Login 
          </Link>
          {' '} Or {' '}
          <Link to={"/signIn"} className="link">
            SignIn 
          </Link>
        </strong>
      </div>
    );
  }

  return (
    <div className="dropdown profile-icon">
      <Link
        to="#"
        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong>{user.email}</strong>
      </Link>
      <ul
        className="dropdown-menu dropdown-menu-light text-small shadow"
        aria-labelledby="dropdownUser1"
      >
        <li>
          <Link to="#" className="dropdown-item">
            Favorites
          </Link>
        </li>
        <li>
          <Link to="#" className="dropdown-item">
            Profile
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to="#" onClick={signOutHandler} className="dropdown-item">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProfileIcon;
