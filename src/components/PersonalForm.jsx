import { Radio } from "@mantine/core";
import React from "react";

const PersonalForm = () => {
  return (
    <div className="bg-[#161618] border border-[#3f4245] rounded-md w-[700px] h-[450px] p-10 mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-3 text-white font-bold flex flex-col gap-10">
          <h1>Name</h1>
          <h1>Phone</h1>
          <h1>Date of Birth</h1>
          <h1>Gender</h1>
          <h1>Address</h1>
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
          <div className="mt-3">
            <Radio.Group className="flex gap-3">
              <Radio
                value="male"
                label="Male"
                color="dark"
                styles={{
                  radio: {
                    backgroundColor: "transparent",
                    borderColor: "#3F4245",
                  },
                  label: {
                    color: "white",
                  },
                }}
              />
              <Radio
                value="female"
                label="Female"
                color="dark"
                styles={{
                  radio: {
                    backgroundColor: "transparent",
                    borderColor: "#3F4245",
                  },
                  label: {
                    color: "white",
                  },
                }}
              />
            </Radio.Group>
          </div>
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

export default PersonalForm;
