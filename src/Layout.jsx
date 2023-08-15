import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow">
        <Header />
        {<Outlet />}
      </div>
    </div>
  );
};

export default Layout;
