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
import { hasLength, isEmail, useForm } from "@mantine/form";
import { PasswordInput, TextInput } from "@mantine/core";

const Login = () => {
  const nav = useNavigate();

  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: isEmail("Invalid Email"),
      password: hasLength({ min: 8, max: 20 }, "Password must be 8 characters"),
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
        <div className="flex flex-col gap-5 w-[60%] text-white">
          <div>
            <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#8AB4F8] to-[#fff]">
              24 Hours
            </h1>
            <h2 className="text-2xl font-semibold mt-3">Welcome Back 👋</h2>
          </div>
          <form
            onSubmit={form.onSubmit(async (values) => {
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
            })}
            className="flex flex-col gap-5"
          >
            <TextInput
              placeholder="your@gmail.com"
              styles={{
                input: {
                  padding: "1.3rem 1rem",
                },
              }}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              placeholder="password"
              styles={{
                input: {
                  padding: "1.3rem 1rem",
                },
              }}
              {...form.getInputProps("password")}
            />
            <span className="text-sm font-light underline self-end">
              Forgot password?
            </span>
            <button className="customButton text-center">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
