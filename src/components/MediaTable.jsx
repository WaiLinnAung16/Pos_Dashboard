import React from "react";
import trash from "/trash.svg";
import copy from "/copy.svg";

const MediaTable = () => {
  const rows = [
    {
      no: 1,
      name: "WATER MELON",

      account: "Wai",
      date: "12/3/2013",
      time: "10:00 AM",
      fileSize: "24MB",
    },
    {
      no: 2,
      name: "WATER MELON",

      account: "Wai",
      date: "12/3/2013",
      time: "10:00 AM",
      fileSize: "24MB",
    },
    {
      no: 3,
      name: "WATER MELON",

      account: "Wai",
      date: "12/3/2013",
      time: "10:00 AM",
      fileSize: "24MB",
    },
    {
      no: 4,
      name: "WATER MELON",

      account: "Wai",
      date: "12/3/2013",
      time: "10:00 AM",
      fileSize: "24MB",
    },
    {
      no: 5,
      name: "WATER MELON",

      account: "Wai",
      date: "12/3/2013",
      time: "10:00 AM",
      fileSize: "24MB",
    },
    {
      no: 6,
      name: "WATER MELON",

      account: "Wai",
      date: "12/3/2013",
      time: "10:00 AM",
      fileSize: "24MB",
    },
  ];
  return (
    <table className=" table  text-white w-full text-[12px]">
      <thead>
        <tr className=" border border-[#3F4245]">
          <th className="  py-2 px-5 text-start">No</th>
          <th className="  py-2 px-5 text-start">Name</th>
          <th className="  py-2 px-5 text-start">Account</th>
          <th className="  py-2 px-5 text-start">Date</th>
          <th className="  py-2 px-5 text-start">Time</th>
          <th className="  py-2 px-5 text-start">FIle Size</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.no} className="border border-[#3F4245]">
              <td className=" py-2 px-5 w-10">{row.no}</td>
              <td className=" py-2 px-5 ">{row.name}</td>
              <td className=" py-2 px-5 w-32">{row.account}</td>
              <td className=" py-2 px-5">{row.date}</td>
              <td className=" py-2 px-5">{row.time}</td>
              <td className=" py-2 px-5 text-start">{row.fileSize}</td>

              <td className=" py-2 px-5">
                <div className="flex items-center gap-3">
                  <img src={trash} alt="" />
                  <img src={copy} alt="" />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MediaTable;
