import React from "react";
import PersonalForm from "../components/PersonalForm";
import Step from "../components/Step";
import LoginInfoForm from "../components/LoginInfoForm";
import PhotoUploadForm from "../components/PhotoUploadForm";

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
        <button className=" bg-[#8ab4f8] rounded px-5 py-[10px] font-semibold">
          User List
        </button>
      </div>

      <div className="flex items-center gap-5">
        <PhotoUploadForm />
        <Step />
      </div>
    </div>
  );
};

export default UserCreate;
