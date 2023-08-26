import React from "react";
import bell from "/public/BellRinging.svg";
import moonStar from "/public/MoonStars.svg";
import userCircle from "/public/UserCircle.svg";
import RightContainer from "../components/Cashier/RightContainer";
import LeftContainer from "../components/Cashier/LeftContainer";
const Cashier = () => {
  return (
    <div className="min-h-screen bg-[#202124]">
      <nav className=" py-[17px] px-8 sticky z-50 bg-[#202124] border-[#3F4245] border-b-[1px] top-0">
        <div className=" flex items-center justify-between">
          <h1 className=" font-black text-3xl text-white">24 Hours</h1>
          <div className=" flex items-center gap-3">
            <div>
              <img src={bell} alt="" />
            </div>
            <div>
              <img src={moonStar} alt="" />
            </div>
            <div>
              <img src={userCircle} alt="" />
            </div>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-12">
        <RightContainer />
        <LeftContainer />
      </div>
    </div>
  );
};

export default Cashier;
