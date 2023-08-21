import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRegisterUser } from "../redux/slices/registerSlice";
import * as Yup from "yup";
import { useRegisterMutation } from "../redux/services/authApi";
import Cookies from "js-cookie";

const LoginInfoForm = ({ nextStep }) => {
  const user = useSelector((store) => store.registerSlice);
  const token = Cookies.get("token");
  const [Register] = useRegisterMutation();
  const name = Cookies.get("name");
  const gender = Cookies.get("gender");
  const dispatch = useDispatch();
  const initialValues = {
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    role: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),

    password: Yup.string()
      .min(8, "Password must be 8 characters")
      .required("Required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password", "")], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = async (values) => {
    console.log(values.role);

    const registerUser = {
      name: name,
      gender: gender,
      role: values.role,
      email: values.email,
      password: values.password,
    };

    console.log(registerUser);

    const data = await Register({ registerUser, token });
    console.log(registerUser);
    console.log(data);
    nextStep();
  };

  return (
    <div className="bg-[#161618] border border-[#3f4245] rounded-md w-[700px] h-[450px] p-10 mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-3 text-white font-bold flex flex-col gap-10">
          <h1>Position</h1>
          <h1>Email</h1>
          <h1>Password</h1>
          <h1>Confirm Password</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="col-span-9 flex flex-col gap-5 text-white">
                <Field
                  type="text"
                  id="role"
                  name="role"
                  className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
                />
                {formik.errors.role && formik.touched.role ? (
                  <span className=" text-red-500 text-sm before:content-['*'] before:mr-1 block">
                    {formik.errors.role}
                  </span>
                ) : null}

                <Field
                  type="text"
                  name="email"
                  className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
                />
                {formik.errors.email && formik.touched.email ? (
                  <span className=" text-red-500 text-sm before:content-['*'] before:mr-1 block">
                    {formik.errors.email}
                  </span>
                ) : null}

                <Field
                  type="password"
                  name="password"
                  className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
                />
                {formik.errors.password && formik.touched.password ? (
                  <span className=" text-red-500 text-sm before:content-['*'] before:mr-1 block">
                    {formik.errors.password}
                  </span>
                ) : null}

                <Field
                  type="password"
                  name="confirmPassword"
                  className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
                />
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <span className=" text-red-500 text-sm before:content-['*'] before:mr-1 block">
                    {formik.errors.confirmPassword}
                  </span>
                ) : null}

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="bg-[#8ab4f8] rounded px-5 py-[10px] font-semibold self-end text-black"
                >
                  Next
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default LoginInfoForm;
