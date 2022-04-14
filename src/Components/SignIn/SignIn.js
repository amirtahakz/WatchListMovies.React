import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { UserService } from "../../Services/UserService";

function SignIn(params) {
  const [state, setState] = useState({ user: {}, errors: {} });

  const changeHandler = (event) => {
    const formData = { [event.target.name]: event.target.value };
    setState({ ...state, user: { ...state.user, ...formData } });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      // post Data
      UserService.SignInUser(state.user);
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
    if (!state.user.rePassword) {
      errors.rePassword = "rePassword Is Empty";
    }
    if (!state.user.phone) {
      errors.phone = "phone Is Empty";
    }
    if (state.user.rePassword !== state.user.password) {
      errors.comparePassword = "password  rePassword Is Not Match";
    }
    setState({ ...state, errors });
    return !(
      errors.email ||
      errors.password ||
      errors.rePassword ||
      errors.comparePassword ||
      errors.phone
    );
  };

  return (
    <div className="form-login-sign-in d-flex justify-content-center align-items-center">
      <form onSubmit={submitHandler}>
        <div className="col-12 d-flex justify-content-center mb-3">
          <Link to={"/"} className="link">
            <p className="text-light title-login">SignIn</p>
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
            type="phone"
            className="txt-boxes"
            placeholder="Phone"
            onChange={changeHandler}
            name="phone"
          />
        </div>
        <small className="form-text text-danger">{state.errors.phone}</small>
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
        <small className="form-text text-danger">
          {state.errors.comparePassword}
        </small>
        <div className="mb-3">
          <input
            type="password"
            className="txt-boxes"
            placeholder="RePassword"
            onChange={changeHandler}
            name="rePassword"
          />
        </div>
        <small className="form-text text-danger">
          {state.errors.rePassword}
        </small>
        <small className="form-text text-danger">
          {state.errors.comparePassword}
        </small>
        <div className="mb-3 d-flex justify-content-center">
          <label className="form-check-label text-light">
            Have Account?<Link to={"/Login/"}>Login</Link>
          </label>
        </div>
        <div className="col-12 d-flex justify-content-center mt-4">
          <button type="submit" className="buttons">
            SignIn
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
