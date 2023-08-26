import React from "react";

import { Link } from "react-router-dom";
import UserCreateForm from "../components/MultiStepForms/UserCreateForm";

const UserCreate = () => {
  return (
    <div className="bg-[#202124] p-5 min-h-screen">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-white text-2xl">User</h1>
          <p className="text-white/70">
            User <span className="text-[#8AB4F8]">/</span> Create User
          </p>
        </div>
        <Link to={"/user-overview"}>
          <button className=" bg-[#8ab4f8] rounded px-5 py-[10px] font-semibold">
            User List
          </button>
        </Link>
      </div>
      <UserCreateForm />
    </div>
  );
};

export default UserCreate;
