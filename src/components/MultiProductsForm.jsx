import React from "react";
import ProductInformation from "./ProductInformation";
import PriceForm from "./PriceForm";
import PhotoUploadForm from "./PhotoUploadForm";

const MultiProductsForm = ({ active }) => {
  if (active === 0) {
    return <ProductInformation />;
  } else if (active === 1) {
    return <PriceForm />;
  } else {
    return <PhotoUploadForm />;
  }
};

export default MultiProductsForm;
