import React, { useState } from "react";
import PersonalForm from "../components/PersonalForm";
import Step from "../components/Step";
import LoginInfoForm from "../components/LoginInfoForm";
import PhotoUploadForm from "../components/PhotoUploadForm";
import Multiform from "../components/Multiform";
import { Link } from "react-router-dom";
import TestForm from "../components/TestForm";

const UserCreate = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
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

      {/* <div className="flex items-center gap-5">
        <Multiform active={active} nextStep={nextStep} />
        <Step active={active} setActive={setActive} />
      </div> */}
      <TestForm />
    </div>
  );
};

export default UserCreate;
