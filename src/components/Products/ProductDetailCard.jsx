import React from "react";
import { LuEdit3 } from "react-icons/lu";
import saleColor from "/saleColor.svg";
const ProductDetailCard = ({ detail }) => {
  console.log(detail);
  return (
    <div className="bg-[#171717] mt-[100px] w-[700px]">
      <div className="flex justify-between items-end p-5">
        <div className="flex items-end gap-5">
          <div className="relative w-[150px] h-[150px] rounded-full -mt-28 bg-white">
            <img src="" alt="" />
            <div className="absolute bottom-2 right-2 w-10 h-10 grid place-content-center rounded-full bg-white text-black border shadow">
              <LuEdit3 />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-white text-xl mb-3">
              {detail?.name}
            </h1>
            <div className="text-[#C5C1C1] text-sm">
              <p className=" tracking-wide">
                Sale price :{" "}
                <span className="text-white">{detail?.sales_price} ကျပ်</span>
              </p>
              <p className=" tracking-wide">
                Actual price :{" "}
                <span className="text-white">{detail?.actual_price} ကျပ်</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-8 mb-3 flex items-center gap-2">
        <img src={saleColor} />
        <span>Information</span>
      </div>
      <div className="flex items-center gap-5 px-8 py-5 bg-[#1A1A1A] border-t border-[#878787]">
        <div className="text-[#b9b9b9] font-semibold text-lg flex flex-col gap-3">
          <p>Name</p>
          <p>Brand</p>
          <p>Stock</p>
          <p>Unit</p>
          <p>More Information</p>
        </div>
        <div className=" text-lg flex flex-col gap-3">
          <p>: {detail?.name}</p>
          <p>: {detail?.brand_id}</p>
          <p>: {detail?.total_stock}</p>
          <p>: {detail?.unit}</p>
          <p>
            :{" "}
            {detail?.more_information.length > 20
              ? detail?.more_information.slice(0, 40)
              : detail?.more_information}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
