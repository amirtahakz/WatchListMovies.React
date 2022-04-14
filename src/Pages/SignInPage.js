import React, { Component } from "react";
import SignIn from "../Components/SignIn/SignIn";

class SignInPage extends Component {
  render() {
    return (
      <div className="container-fluid body position-absolute d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12">
              <SignIn/>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInPage;
