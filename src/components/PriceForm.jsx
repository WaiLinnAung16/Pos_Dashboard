import React from "react";

const PriceForm = () => {
  return (
    <div className="bg-[#161618] border border-[#3f4245] rounded-md w-[700px] h-[300px] p-10 mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-3 text-white font-bold flex flex-col gap-10">
          <h1>Actual Price</h1>
          <h1>Sale Price</h1>
        </div>
        <div className="col-span-9 flex flex-col gap-5 text-white">
          <input
            type="text"
            className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
          />
          <input
            type="text"
            className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceForm;
