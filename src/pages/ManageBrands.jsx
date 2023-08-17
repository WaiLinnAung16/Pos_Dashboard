import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const ManageBrands = () => {
  return (
    <div className=" mx-6 my-3 min-h-screen text-white">
      <div className="flex justify-between items-center mb-[50px]">
        <div>
          <h3 className=" text-[22px] font-[600] text-white mb-[8px]">
            Manage Brands
          </h3>
          <p className=" text-[14px] font-[500] tracking-[0.15px] text-white/70">
            Inventory / Manage Brands
          </p>
        </div>
        <div className="">
          <Link
            to={"/profile-edit"}
            className="px-[16px] py-[7px] cursor-pointer flex items-center gap-2 text-[#202124] font-[600]  bg-[#8AB4F8] rounded-[5px] transition-all hover:bg-[#8ab4f8a7]"
          >
            Add Brand
          </Link>
        </div>
      </div>

      <div className="">
        <div className=" flex items-center justify-between">
          <h3 className=" text-[22px] text-white font-semibold">
            Brand Overview
          </h3>
          <div className="flex items-center justify-between gap-[10px] bg-transparent border border-[#3F4245] rounded-[5px] w-[260px] h-[34px] px-[11px]">
            <FiSearch className="w-[17px] h-[17px] pt-[2px] cursor-pointer" />
            <input
              placeholder="Search"
              type="text"
              className=" bg-transparent rounded-[5px] w-full h-[34px] focus:outline-none placeholder:text-[14px] placeholder:font-semibold placeholder:text-[#E8EAED]"
            />
          </div>
        </div>

        <div className=" flex items-start justify-between mt-[20px]">
          <div className=" px-[10px] py-[5px] border border-[#7E7F80] rounded-[5px]">
            <button className="  pr-[5px] border-r border-[#7E7F80]">
              this month
            </button>
            <button className=" pl-[5px] text-[#8AB4F8]">Last month</button>
          </div>

          <div className=" flex items-center gap-5">
            <div>
              <p className="flex items-center gap-2 text-[#7E7F80] text-[14px]">
                Sort :{" "}
                <span className=" flex items-center gap-1 text-white">
                  <p>Last</p>
                  <IoIosArrowDown className="pt-[2px] w-[14px] h-[14px] text-[#8AB4F8]" />{" "}
                </span>
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-[#7E7F80] text-[14px]">
                Filter :{" "}
                <span className=" flex items-center gap-1 text-white">
                  <p>All files</p>
                  <IoIosArrowDown className="pt-[2px] w-[14px] h-[14px] text-[#8AB4F8]" />{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[30px]"></div>
      </div>
    </div>
  );
};

export default ManageBrands;
