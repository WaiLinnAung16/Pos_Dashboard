import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaMinus } from "react-icons/fa";

const BrandsTable = ({ brandsData }) => {
  return (
    <table className=" table  text-white w-full mt-5 text-[12px]">
      <thead>
        <tr className=" border border-[#3F4245]">
          <th className="  py-2 px-5 text-start">No</th>
          <th className="  py-2 px-5 text-start">ID</th>
          <th className="  py-2 px-5 text-start">PRODUCT NAME</th>
          <th className="  py-2 px-5 text-start">COMPANY NAME</th>
        </tr>
      </thead>
      <tbody>
        {brandsData?.map((row, index) => {
          return (
            <tr key={row.id} className="border border-[#3F4245]">
              <td className=" py-2 px-5 w-10">{index + 1}</td>
              <td className=" py-2 px-5 w-32">{row.id}</td>
              <td className=" py-2 px-5">{row.name}</td>
              <td className=" py-2 px-5">{row.company}</td>
              <td className=" py-2 px-5">
                <div className="flex items-center gap-3">
                  <div className=" w-8 h-8 bg-[#3F4245] grid place-content-center rounded-full">
                    <FaMinus className="text-lg" />
                  </div>
                  <div className=" w-8 h-8 bg-[#3F4245] grid place-content-center rounded-full">
                    <MdEdit className="text-lg" />
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

export default BrandsTable;
