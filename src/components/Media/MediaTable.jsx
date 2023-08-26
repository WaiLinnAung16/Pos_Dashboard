import React from "react";
import trash from "/trash.svg";
import copy from "/copy.svg";

const MediaTable = ({ media }) => {
  console.log(media);

  return (
    <table className=" table  text-white w-full text-[12px]">
      <thead>
        <tr className=" border border-[#3F4245]">
          <th className="  py-2 px-5 text-start">No</th>
          <th className="  py-2 px-5 text-start">Name</th>
          <th className="  py-2 px-5 text-start">Url</th>
          <th className="  py-2 px-5 text-start">Extension</th>
        </tr>
      </thead>
      <tbody>
        {media?.map((row, index) => {
          return (
            <tr key={row.id} className="border border-[#3F4245]">
              <td className=" py-2 px-5 w-10">{index + 1}</td>
              <td className=" py-2 px-5 ">{row.user_name}</td>
              <td className=" py-2 px-5 w-32">{row.url}</td>
              <td className=" py-2 px-5">{row.ext}</td>

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
