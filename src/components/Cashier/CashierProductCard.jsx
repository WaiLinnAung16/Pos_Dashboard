import React from "react";
import straw from "/strawberry.jpg";

const CashierProductCard = ({ product }) => {
  return (
    <div className=" col-span-3 border border-[#3F4245] rounded-[5px] text-white bg-[#242528]">
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

export default CashierProductCard;
