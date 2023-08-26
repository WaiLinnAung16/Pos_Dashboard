import { FiSearch } from "react-icons/fi";
import overview from "/public/overview.svg";
import React from "react";
import CashierProducts from "./CashierProducts";
import { Link } from "react-router-dom";

const RightContainer = () => {
  return (
    <div className="col-span-9">
      <div className="flex justify-between items-center px-8 py-3">
        <p className="text-white/70 flex items-center gap-3">
          <img src={overview} alt="" />{" "}
          <Link to={"/"} className="hover:text-white">
            Dashboard
          </Link>
          <span className="text-[#8AB4F8]">/</span> Cashier
        </p>
        <div className="text-white flex items-center justify-between gap-[10px] bg-transparent border border-[#3F4245] rounded-[5px] w-[260px] h-[34px] px-[11px]">
          <FiSearch className="w-[17px] h-[17px] pt-[2px] cursor-pointer" />
          <input
            placeholder="Search"
            type="text"
            className=" bg-transparent rounded-[5px] w-full h-[34px] focus:outline-none placeholder:text-[14px] placeholder:font-semibold placeholder:text-[#E8EAED]"
          />
        </div>
      </div>
      <CashierProducts />
    </div>
  );
};

export default RightContainer;
