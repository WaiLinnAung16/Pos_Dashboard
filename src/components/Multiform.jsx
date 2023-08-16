import React from "react";
import PersonalForm from "./PersonalForm";
import LoginInfoForm from "./LoginInfoForm";
import PhotoUploadForm from "./PhotoUploadForm";

const Multiform = ({ active }) => {
  if (active === 0) {
    return <PersonalForm />;
  } else if (active === 1) {
    return <LoginInfoForm />;
  } else {
    return <PhotoUploadForm />;
  }
};

export default Multiform;
