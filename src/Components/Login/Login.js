import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { UserService } from "../../Services/UserService";
import { CookiesManger } from "../../Utilities/Cookies/Cookies";

function Login(params) {
  const [state, setState] = useState({ user: {}, errors: {} });
  const [rememberMe, setRememberMe] = useState(false);

  const changeHandler = (event) => {
    const formData = { [event.target.name]: event.target.value };
    setState({ ...state, user: { ...state.user, ...formData } });
  };
  const checkBoxHandler = (event) => {
    setRememberMe(event.target.checked);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      // post Data
      UserService.LoginUser(state.user).then((response) => {
        if (response.status === 200) {
          if (rememberMe) {
            CookiesManger.SetUserCookie(
              response.data.accessToken,
              response.data.refreshToken,
              response.data.email,
              8640 //6 days
            );
            window.location.href = "/";
          }
          CookiesManger.SetUserCookie(
            response.data.accessToken,
            response.data.refreshToken,
            response.data.email,
            1440 //1 day
          );
          window.location.href = "/";
        }
      });
      setState({ user: {}, errors: {} });
    }
  };

  const formIsValid = () => {
    const errors = {};
    if (!state.user.email) {
      errors.email = "Email Is Empty";
    }
    if (!state.user.password) {
      errors.password = "Password Is Empty";
    }
    setState({ ...state, errors });
    return !(errors.email || errors.password);
  };
  return (
    <div className="form-login-sign-in d-flex justify-content-center align-items-center">
      <form onSubmit={submitHandler}>
        <div className="col-12 d-flex justify-content-center mb-3">
          <Link to={"/"} className="link">
            <p className="text-light title-login">Login</p>
          </Link>
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="txt-boxes"
            placeholder="Email"
            onChange={changeHandler}
            name="email"
          />
        </div>
        <small className="form-text text-danger">{state.errors.email}</small>
        <div className="mb-3">
          <input
            type="password"
            className="txt-boxes"
            placeholder="Password"
            onChange={changeHandler}
            name="password"
          />
        </div>
        <small className="form-text text-danger">{state.errors.password}</small>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={(e) => checkBoxHandler(e)}
          />
          <label className="form-check-label text-light">Check me out</label>
          <label className="form-check-label text-light ms-3">
            No Account?<Link to={"/signIn/"}>Create One</Link>
          </label>
        </div>
        <div className="col-12 d-flex justify-content-center mt-4">
          <button type="submit" className="buttons">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
