import React from "react";
import { MdEdit } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";

const ProductsTable = ({ productsData }) => {
  return (
    <table className=" table  text-white w-full mt-5 text-[12px]">
      <thead>
        <tr className=" border border-[#3F4245]">
          <th className="  py-2 px-5 text-start">No</th>
          <th className="  py-2 px-5 text-start">Name</th>
          <th className="  py-2 px-5 text-start">ID</th>
          <th className="  py-2 px-5 text-start">BRAND</th>
          <th className="  py-2 px-5 text-start">UNIT</th>
          <th className="  py-2 px-5 text-end">SALE PRIZE</th>
          <th className="  py-2 px-5 text-end">STOCK</th>
        </tr>
      </thead>
      <tbody>
        {productsData?.map((row, index) => {
          return (
            <tr key={row.id} className="border border-[#3F4245]">
              <td className=" py-2 px-5 w-10">{index + 1}</td>
              <td className=" py-2 px-5 ">{row.name}</td>
              <td className=" py-2 px-5 w-32">{row.id}</td>
              <td className=" py-2 px-5">{row.brand_name}</td>
              <td className=" py-2 px-5">{row.unit}</td>
              <td className=" py-2 px-5 text-end">{row.sales_price}</td>
              <td className=" py-2 px-5 text-end">{row.total_stock}</td>
              <td className=" py-2 px-5">
                <div className="flex items-center gap-3">
                  <div className=" w-8 h-8 bg-[#3F4245] grid place-content-center rounded-full">
                    <AiOutlineMinus className="text-lg text-red-500" />
                  </div>
                  <div className=" w-8 h-8 bg-[#3F4245] grid place-content-center rounded-full">
                    <MdEdit className="text-lg" />
                  </div>
                  <div className=" w-8 h-8 bg-[#3F4245] grid place-content-center rounded-full">
                    <GoArrowRight className="text-lg text-[#E8EAED]" />
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsTable;
