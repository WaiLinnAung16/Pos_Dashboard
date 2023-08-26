import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { BiUser } from "react-icons/bi";
import { RiLockLine } from "react-icons/ri";
import img from "/public/login.svg";
import { useLoginMutation } from "../redux/services/authApi";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      const { data } = await login(values);
      console.log(data);
      if (data?.token) {
        dispatch(addUser({ token: data?.token }));
        toast.success("Successfully login 🤩");
        setTimeout(() => {
          nav("/");
        }, 2000);
      } else {
        toast.error("Please enter correct email and password");
      }
    },
  });

  return (
    <div className="bg-gray-50 overflow-hidden font-nunito grid lg:grid-cols-5 h-screen ">
      <Toaster position="bottom-center" />
      {/* right login form */}
      <div
        className="max-lg:hidden col-span-3  grid place-content-center "
        style={{
          backgroundImage:
            "linear-gradient(336deg, rgb(62, 25, 113),rgb(72, 105, 206))",
        }}
      >
        <img className="h-[500px]" src={img} alt="" />
      </div>
      {/* right   */}
      <div className="  col-span-2 flex justify-center items-center max-[400px]:mx-4 bg-[#202124]">
        <div className="w-[400px]">
          <div className="flex flex-col gap-2 mb-8">
            <h1 className=" text-[30px] text-white font-black tracking-wider text-center">
              24Hours
            </h1>
            <div className=" text-[#E8EAED] text-center text-[28px] font-semibold">
              <p className="">Welcome Back</p>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit} className=" flex flex-col gap-8">
            <div className=" relative">
              <input
                autoFocus
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className=" text-gray-600 pl-12 py-4 rounded w-full outline-none bg-blue-50"
              />
              {formik.errors.email ? (
                <span className=" text-red-500 text-sm before:content-['*'] before:mr-1 block mt-2">
                  {formik.errors.email}
                </span>
              ) : null}
              <span className=" absolute top-[18px] left-5 text-gray-400 text-lg">
                <BiUser />
              </span>
            </div>
            <div className=" relative">
              <input
                onChange={formik.handleChange}
                type={`${showPassword ? "text" : "password"}`}
                id="password"
                name="password"
                placeholder="*****"
                className=" text-gray-600 px-12 py-4 rounded w-full outline-none bg-blue-50"
              />
              {formik.errors.password ? (
                <span className=" text-red-500 text-sm before:content-['*'] before:mr-1 block mt-2">
                  {formik.errors.password}
                </span>
              ) : null}
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
                type="submit"
                className="uppercase text-white font-[700] text-[14px] bg-[#5B96F5] px-14 py-4 rounded-md transition-all duration-300 hover:bg-[#062E6F]"
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
