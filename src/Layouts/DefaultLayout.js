import { Outlet } from "react-router-dom";
import Announcements from "../Components/Announcements/Announcements";
import SideBar from "../Components/SideBar/SideBar";
import React, { Component } from 'react';


class DefaultLayout  extends Component {
  render() { 
    return (
      <div className="container-fluid body">
        <div className="row">
          <SideBar />
          <Outlet />
          <Announcements />
        </div>
      </div>
    );
  }
}
 


export default DefaultLayout;
