import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
const UserList = () => {
  const rows = [
    {
      id: 1,
      name: "Wai Linn Aung",
      position: "Staff",
      email: "email.com",
    },
    {
      id: 2,
      name: "Wai Linn Aung",
      position: "Staff",
      email: "email.com",
    },
  ];
  return (
    <table className="table-fixed text-white w-full mt-5">
      <thead>
        <tr className=" border border-[#3F4245]">
          <th className=" w-10  py-2 px-5 text-start">No</th>
          <th className="  py-2 px-5 text-start">Name</th>
          <th className="  py-2 px-5 text-start">Position</th>
          <th className="  py-2 px-5 text-start">Email</th>
          <th className="  py-2 px-5 text-start"></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.id} className="border border-[#3F4245]">
              <td className=" py-2 px-5">{row.id}</td>
              <td className=" py-2 px-5">{row.name}</td>
              <td className=" py-2 px-5">{row.position}</td>
              <td className=" py-2 px-5">{row.position}</td>
              <td className=" py-2 px-5">
                <div className="flex items-center gap-3">
                  <div className=" w-8 h-8 bg-[#3F4245] grid place-content-center rounded-full">
                    <FaMinus className="text-lg" />
                  </div>
                  <div className=" w-8 h-8 bg-[#3F4245] grid place-content-center rounded-full">
                    <MdEdit className="text-lg" />
                  </div>
                  <div className=" w-8 h-8 bg-[#3F4245] grid place-content-center rounded-full">
                    <BsArrowRightShort className="text-lg" />
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

export default UserList;
