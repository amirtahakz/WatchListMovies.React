import React, { Component, Fragment } from "react";
import { NavBar } from "./NavBar";
import { Slider } from "./Slider";

class MainHome extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <NavBar />
          <Slider />
        </div>
      </div>
    );
  }
}

export { MainHome };
