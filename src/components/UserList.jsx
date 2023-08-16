import { Table } from "@mantine/core";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
const UserList = () => {
  const elements = [
    {
      num: 1,
      name: "Wai Linn Aung",
      position: "Staff",
      email: "waia@gmail.com",
    },
    {
      num: 2,
      name: "Wai Linn Aung",
      position: "Staff",
      email: "waia@gmail.com",
    },
    {
      num: 3,
      name: "Wai Linn Aung",
      position: "Staff",
      email: "waia@gmail.com",
    },
    {
      num: 4,
      name: "Wai Linn Aung",
      position: "Staff",
      email: "waia@gmail.com",
    },
    {
      num: 5,
      name: "Wai Linn Aung",
      position: "Staff",
      email: "waia@gmail.com",
    },
  ];
  const rows = elements.map((element) => (
    <tr key={element.num} className="text-white">
      <td>{element.num}</td>
      <td>{element.name}</td>
      <td>{element.position}</td>
      <td>{element.email}</td>
      <td>
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
  ));

  return (
    <Table withBorder className="mt-5 ">
      <thead>
        <tr>
          <th>
            <span className="text-white">No.</span>
          </th>
          <th>
            <span className="text-white">Name</span>
          </th>
          <th>
            <span className="text-white">Position</span>
          </th>
          <th>
            <span className=" text-white">Email</span>
          </th>
          <th className="w-[200px]"></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default UserList;
