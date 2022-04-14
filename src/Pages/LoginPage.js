import React, { Component } from "react";
import Login from "../Components/Login/Login";

class LoginPage extends Component {
  render() {
    return (
      <div className="container-fluid body position-absolute d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
