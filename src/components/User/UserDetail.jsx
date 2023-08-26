import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { LuEdit3 } from "react-icons/lu";
import UserDetailTabs from "./UserDetailTabs";
const UserDetail = () => {
  return (
    <div className="bg-[#171717] mt-[100px] w-[700px]">
      <div className="flex justify-between items-end p-5">
        <div className="flex items-end gap-5">
          <div className="relative w-[150px] h-[150px] rounded-full -mt-28 bg-white">
            <img src="" alt="" />
            <div className="absolute bottom-2 right-2 w-10 h-10 grid place-content-center rounded-full bg-white border shadow">
              <LuEdit3 />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-white text-xl">Ethan James</h1>
            <p className=" text-sm text-white/70">Staff</p>
          </div>
        </div>
        <div className=" flex items-center gap-3">
          <div className="w-10 h-10 rounded-full grid place-content-center text-lg text-white bg-[#202124]">
            <IoMailOpenOutline />
          </div>
          <div className="w-10 h-10 rounded-full grid place-content-center text-white bg-[#202124]">
            <FiPhoneCall />
          </div>
        </div>
      </div>
      <UserDetailTabs />
    </div>
  );
};

export default UserDetail;
