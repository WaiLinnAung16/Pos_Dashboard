import React from "react";
import straw from "/strawberry.jpg";
import { useNavigate } from "react-router-dom";

const ProductsGridCard = ({ product }) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/product-detail/${product?.id}`)}
      className=" col-span-2 border border-[#3F4245] rounded-[5px]"
    >
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
