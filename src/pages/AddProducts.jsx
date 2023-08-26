import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductsForm from "../components/MultiStepForms/ProductsForm";

const AddProducts = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  return (
    <div className="bg-[#202124] p-5 min-h-screen">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-white text-2xl">Add Product</h1>
          <p className="text-white/70">
            Inventory <span className="text-[#8AB4F8]">/</span> Add Product
          </p>
        </div>
        <Link to={"/products"}>
          <button className=" bg-[#8ab4f8] rounded px-5 py-[10px] font-semibold">
            Product List
          </button>
        </Link>
      </div>
      <ProductsForm />
    </div>
  );
};

export default AddProducts;
