import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaMinus } from "react-icons/fa";

const BrandsTable = () => {
  const rows = [
    {
      no: 1,
      id: 60569,
      productName: "YOGURT",
      companyName: "FANTA",
      agent: "WENDY",
      phone: "09-985623547",
      desc: "HEALTHY FOOD",
    },
    {
      no: 2,
      id: 5466,
      productName: "YOGURT",
      companyName: "FANTA",
      agent: "WENDY",
      phone: "09-985623547",
      desc: "HEALTHY FOOD",
    },
    {
      no: 3,
      id: 576767,
      productName: "YOGURT",
      companyName: "FANTA",
      agent: "WENDY",
      phone: "09-985623547",
      desc: "HEALTHY FOOD",
    },
    {
      no: 4,
      id: 674567,
      productName: "YOGURT",
      companyName: "FANTA",
      agent: "WENDY",
      phone: "09-985623547",
      desc: "HEALTHY FOOD",
    },
  ];
  return (
    <table className=" table  text-white w-full mt-5 text-[12px]">
      <thead>
        <tr className=" border border-[#3F4245]">
          <th className="  py-2 px-5 text-start">No</th>
          <th className="  py-2 px-5 text-start">ID</th>
          <th className="  py-2 px-5 text-start">PRODUCT NAME</th>
          <th className="  py-2 px-5 text-start">COMPANY NAME</th>
          <th className="  py-2 px-5 text-start">AGENT</th>
          <th className="  py-2 px-5 text-start">PHONE</th>
          <th className="  py-2 px-5 text-start">DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.id} className="border border-[#3F4245]">
              <td className=" py-2 px-5 w-10">{row.no}</td>
              <td className=" py-2 px-5 w-32">{row.id}</td>
              <td className=" py-2 px-5">{row.productName}</td>
              <td className=" py-2 px-5">{row.companyName}</td>
              <td className=" py-2 px-5">{row.agent}</td>
              <td className=" py-2 px-5">{row.phone}</td>
              <td className=" py-2 px-5">{row.desc}</td>
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
