import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addRegisterUser } from "../redux/slices/registerSlice";
import { useRegisterMutation } from "../redux/services/authApi";
import Cookies from "js-cookie";
const TestForm = () => {
  const token = Cookies.get("token");
  const [user] = useRegisterMutation();
  const initialValues = {
    name: "",
    phone_number: "",
    date_birth: "",
    gender: "",
    address: "",
    role: "",
    email: "",
    password: "",
    user_photo: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 charaters")
      .required("Required"),
    phone_number: Yup.string()
      .min(11, "Phone number must be 11 characters")
      .required("Required"),
    gender: Yup.string().required("Required"),
    address: Yup.string()
      .min(15, "Address must be 15 characters")
      .required("Required"),
    role: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = async (values) => {
    console.log(values);
    // console.log(JSON.stringify(values));
    const dataUser = await user(values, token);
    console.log(dataUser);
  };
  return (
    <div className="bg-[#161618] border border-[#3f4245] rounded-md w-[700px] h-[450px] p-10 mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-3 text-white font-bold flex flex-col gap-10">
          <h1>Name</h1>
          <h1>Phone</h1>
          <h1>Date of Birth</h1>
          <h1>Gender</h1>
          <h1>Address</h1>
          <h1>Role</h1>
          <h1>Email</h1>
          <h1>Password</h1>
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
                  id="name"
                  name="name"
                  className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
                />
                {formik.errors.name && formik.touched.name ? (
                  <span className=" text-red-500 text-sm before:content-['*'] before:mr-1 block">
                    {formik.errors.name}
                  </span>
                ) : null}
                <Field
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
                />
                {formik.errors.phone_number && formik.touched.phone_number ? (
                  <span className=" text-red-500 text-sm before:content-['*'] before:mr-1 block">
                    {formik.errors.phone_number}
                  </span>
                ) : null}

                <Field
                  type="text"
                  id="date_birth"
                  name="date_birth"
                  className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
                />

                <div className="mt-3">
                  <label>
                    <Field type="radio" name="gender" value="Male" />
                    Male
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="Female" />
                    Female
                  </label>
                  {formik.errors.gender && formik.touched.gender ? (
                    <span className=" text-red-500 text-sm before:content-['*'] before:mr-1 block">
                      {formik.errors.gender}
                    </span>
                  ) : null}
                </div>
                <Field
                  type="text"
                  name="address"
                  id="address"
                  className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2 mt-3"
                />
                {formik.errors.address && formik.touched.address ? (
                  <span className=" text-red-500 text-sm before:content-['*'] before:mr-1 block">
                    {formik.errors.address}
                  </span>
                ) : null}

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
                  type="text"
                  id="user_photo"
                  name="user_photo"
                  className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
                />
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

export default TestForm;
