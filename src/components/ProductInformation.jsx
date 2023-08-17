import React from "react";

const ProductInformation = () => {
  return (
    <div className="bg-[#161618] border border-[#3f4245] rounded-md w-[700px] h-[550px] p-10 mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-3 text-white font-bold flex flex-col gap-10">
          <h1>Name</h1>
          <h1>Id</h1>
          <h1>Brand</h1>
          <h1>Stock</h1>
          <h1>Unit</h1>
          <h1>More Info</h1>
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
          <input
            type="text"
            className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
          />
          <input
            type="text"
            className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
          />
          <input
            type="text"
            className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2 mt-3"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
