import React from "react";
import straw from "../../public/strawberry.jpg";

const ProductsGridCard = () => {
  return (
    <div className=" w-48 border border-[#3F4245] rounded-[5px]">
      <div>
        <img src={straw} alt="" className=" overflow-hidden" />
      </div>
      <div className=" py-[15px] pl-10 font-[14px]">
        <p className=" font-medium mb-1">strawberry yogut</p>
        <p>1000 MMK</p>
      </div>
    </div>
  );
};

export default ProductsGridCard;
