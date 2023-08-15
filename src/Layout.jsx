import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/SideBar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-[#202124]">
        <Header />
        {<Outlet />}
      </div>
    </div>
  );
};

export default Layout;
