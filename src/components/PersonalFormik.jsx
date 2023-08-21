import { Field, Form, Formik } from "formik";
import React from "react";

const PersonalFormik = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "",
          onSubmit: (values) => {
            console.log(values);
            //   dispatch(
            //     addRegisterUser({
            //       name: values.name,
            //       phone_number: values.phone_number,
            //       date_of_birth: values.date_of_birth,
            //       gender: values.gender,
            //       address: values.address,
            //     })
            //   );
          },
        }}
      >
        <Form>
          <input
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <input
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <input label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </input>

          <input name="acceptedTerms">I accept the terms and conditions</input>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default PersonalFormik;
