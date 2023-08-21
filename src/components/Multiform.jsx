import React, { useState } from "react";
import PersonalForm from "./PersonalForm";
import LoginInfoForm from "./LoginInfoForm";
import PhotoUploadForm from "./PhotoUploadForm";
import { useSelector } from "react-redux";

const Multiform = ({ active, nextStep }) => {
  if (active === 0) {
    return <PersonalForm nextStep={nextStep} />;
  } else if (active === 1) {
    return <LoginInfoForm nextStep={nextStep} />;
  } else {
    return <PhotoUploadForm />;
  }
};

export default Multiform;
