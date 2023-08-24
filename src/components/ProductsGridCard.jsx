import React from "react";
import straw from "../../public/strawberry.jpg";

const ProductsGridCard = ({ product }) => {
  return (
    <div className=" col-span-2 border border-[#3F4245] rounded-[5px]">
      <div>
        <img src={straw} alt="" className=" overflow-hidden" />
      </div>
      <div className=" p-5 font-[14px] text-end">
        <p className=" font-medium mb-1 capitalize">{product.name}</p>
        <p>{product.sales_price} ကျပ်</p>
      </div>
    </div>
  );
};

export default ProductsGridCard;
