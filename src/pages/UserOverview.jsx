import React from "react";
import { BsPlusLg } from "react-icons/bs";
import UserList from "../components/UserList";
import { Link } from "react-router-dom";
import UserDetail from "../components/UserDetail";

const UserOverview = () => {
  return (
    <div className="bg-[#202124] p-5 min-h-screen">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-white text-2xl">User</h1>
          <p className="text-white/70">
            User <span className="text-[#8AB4F8]">/</span> Overview
          </p>
        </div>
        <Link to={"/user-create"}>
          <button className=" bg-[#8ab4f8] flex items-center gap-3 rounded px-5 py-[10px] font-semibold">
            <BsPlusLg className="text-xl" />
            Create User
          </button>
        </Link>
      </div>
      <UserList />
      <UserDetail />
    </div>
  );
};

export default UserOverview;
