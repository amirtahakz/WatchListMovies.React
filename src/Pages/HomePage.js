import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Announcements } from "../Components/Announcements/Index";
import { MainHome } from "../Components/MainHome/Index";
import { SideBar } from "../Components/SideBar/Index";

class Home extends Component {
  render() {
    // position-fixed
    return (
      <div className="container-fluid body">
        <div className="row">
          <aside className="col-12 col-md-3 col-lg-2 border-end">
            <SideBar />
          </aside>
          <main className="col-12 col-md-6 col-lg-8 main-home">
            <MainHome />
          </main>
          <aside className="col-12 col-md-3 col-lg-2 border-start">
            <Announcements />
          </aside>
        </div>
      </div>
    );
  }
}

export { Home };
