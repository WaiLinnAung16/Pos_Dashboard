import React from "react";

const LoginInfoForm = () => {
  return (
    <div className="bg-[#161618] border border-[#3f4245] rounded-md w-[700px] h-[450px] p-10 mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-3 text-white font-bold flex flex-col gap-10">
          <h1>Position</h1>
          <h1>Email</h1>
          <h1>Password</h1>
          <h1>Confirm Password</h1>
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
            type="password"
            className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
          />
          <input
            type="password"
            className="bg-[#202124] border border-[#3f4245] rounded outline-none p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginInfoForm;
