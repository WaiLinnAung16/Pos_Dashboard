import React from "react";

const Receive = () => {
  return (
    <div className="bg-[#161618] h-[60%] flex flex-col text-white">
      <h1 className="text-2xl text-white font-semibold px-5 mt-3">Receive</h1>
      <ul className=" flex-1">
        <li className="flex justify-between items-center text-white px-5 py-3 border-b border-[#3F4245]">
          <div className="flex flex-col gap-1">
            <p>Love</p>
            <p className=" text-[#b6b6b6] text-sm">၁ ခု ၁၅၀၀ ကျပ်</p>
          </div>
          <h1 className="font-semibold text-lg">1500</h1>
        </li>
      </ul>
      <div className="self-end text-end mb-3 mr-5">
        <h1>
          စုစုပေါင်း - <span className="font-semibold">1500</span>
        </h1>
        <p className="text-sm text-[#b6b6b6]">အခွန် - 700</p>
      </div>
    </div>
  );
};

export default Receive;
