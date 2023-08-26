import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductDetailQuery } from "../redux/services/productApi";
import Cookies from "js-cookie";
import ProductDetailCard from "../components/Products/ProductDetailCard";

const ProductDetail = () => {
  const { id } = useParams();
  const token = Cookies.get("token");
  const { data: detail } = useGetProductDetailQuery({ id, token });
  console.log(detail);
  return (
    <div className=" mx-6 my-3 min-h-screen text-white">
      <div className="flex justify-between items-center mb-[50px]">
        <div>
          <h3 className=" text-[22px] font-[600] text-white mb-[8px]">
            Product Detail
          </h3>
          <p className=" text-[14px] font-[500] tracking-[0.15px] text-white/70">
            Inventory / Product / Product Detail
          </p>
        </div>
        <div className=" flex gap-3">
          <Link to={"/products"}>
            <button className=" text-[#8ab4f8] border border-[#7E7F80] rounded px-5 py-[10px] font-semibold hover:bg-[#8ab4f8] hover:text-black">
              Products Overview
            </button>
          </Link>
          <Link to={"/prodcuts"}>
            <button className=" bg-[#8ab4f8] text-black rounded px-5 py-[10px] font-semibold">
              Edit Product
            </button>
          </Link>
        </div>
      </div>
      <ProductDetailCard detail={detail?.data} />
    </div>
  );
};

export default ProductDetail;
