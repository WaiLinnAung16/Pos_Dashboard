import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";

import {BiUser} from "react-icons/bi"
import { RiLockLine } from "react-icons/ri";
import img from "../../public/loginImg.jpg"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gray-50 overflow-hidden font-nunito grid lg:grid-cols-5 h-screen">
      {/* right login form */}
      <div className="max-lg:hidden col-span-3 bg-[#161618]">
        <img className="h-full w-full object-cover" src={img} alt="" />
      </div>
      {/* right   */}
      <div className="  col-span-2 flex justify-center items-center max-[400px]:mx-4 bg-[#202124]">
        <div className=" max-[400px]:w-[300px] w-[400px]">
          <div className="flex flex-col gap-2 mb-8">
            <h1 className=" text-[30px] text-[#E8EAED] font-[700] text-center">
              24Hours
            </h1>
            <div className=" text-[#E8EAED] text-center text-[28px] font-semibold" >
              <p className="">Welcome Back</p>
            </div>
          </div>
          <form onSubmit={""} className=" flex flex-col gap-8">
            <div className=" relative">
              <input
                autoFocus
                onChange={""}
                defaultValue={""}
                type="text"
                name="username"
                placeholder="Username"
                className=" text-gray-600 pl-12 py-4 rounded w-full outline-none bg-blue-50"
              />
              <small className="text-red-500"></small>
              <span className=" absolute top-[18px] left-5 text-gray-400 text-lg">
                <BiUser />
              </span>
            </div>
            <div className=" relative">
              <input
                onChange={""}
                defaultValue={""}
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className=" text-gray-600 px-12 py-4 rounded w-full outline-none bg-blue-50"
              />
              <span className=" absolute top-[18px] left-5 text-gray-400 text-lg">
                <RiLockLine />
              </span>
              {showPassword ? (
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className=" cursor-pointer absolute right-5 top-[12px] text-gray-600 w-8 h-8 flex justify-center items-center hover:bg-blue-100 transition duration-200 rounded-full"
                >
                  <AiOutlineEyeInvisible />
                </div>
              ) : (
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className=" cursor-pointer absolute right-5 top-[12px] text-gray-600 w-8 h-8 flex justify-center items-center hover:bg-blue-100 transition duration-200 rounded-full"
                >
                  <AiOutlineEye />
                </div>
              )}
            </div>
            
            <div className=" flex justify-center">
              <button
                disabled={""}
                className={` uppercase text-white font-[700] text-[14px] bg-[#5B96F5] px-14 py-4 rounded-md`}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
