import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import BrandsTable from "../components/BrandsTable";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";
import { useGetBrandsQuery } from "../redux/services/productApi";
import Cookies from "js-cookie";

function handleFileUpload(e) {
  const selectedFile = e.target.files[0];

  // Perform actions with the selected file, such as uploading or displaying it.
  console.log("Selected file:", selectedFile);
}

const ManageBrands = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const token = Cookies.get("token");
  const { data: brands } = useGetBrandsQuery(token);
  const brandsData = brands?.data;
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        size={"319px"}
        title="Add New Brand"
        withCloseButton={false}
        position="right"
        styles={{
          content: {
            backgroundColor: "#202124",
          },
          header: {
            backgroundColor: "#202124",
            paddingTop: "29px",
            paddingBottom: "29px",
            paddingLeft: "45px",
            paddingRight: "45px",
          },
          title: {
            fontSize: "21px",
            fontWeight: "600",
            color: "#FBFBFB",
          },
          body: {
            paddingLeft: "45px",
            paddingRight: "45px",
          },
        }}
      >
        <div className="w-[228px] h-[92px] cursor-pointer flex flex-col items-center justify-center text-[#E8EAED] bg-[#3F4245CC] border border-dashed border-[#E8EAED] rounded-[5px]">
          <label
            htmlFor="fileInput"
            className="flex flex-col items-center cursor-pointer"
          >
            <AiOutlinePlus size={17} />
            <p className="font-medium">Add Image</p>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
        <div className="mt-[20px] flex flex-col gap-[20px]">
          <div className="text-white flex flex-col gap-[5px]">
            <h4 className=" font-medium">Brand Name</h4>
            <input
              type="text"
              className=" w-full h-[36px] p-[8px] rounded-[4px] bg-transparent border border-[#3F4245] focus:outline-none"
            />
          </div>
          <div className="text-white flex flex-col gap-[5px]">
            <h4 className=" font-medium">Company Name</h4>
            <input
              type="text"
              className=" w-full h-[36px] p-[8px] rounded-[4px] bg-transparent border border-[#3F4245] focus:outline-none"
            />
          </div>
          <div className="text-white flex flex-col gap-[5px]">
            <h4 className=" font-medium">Agent</h4>
            <input
              type="text"
              className=" w-full h-[36px] p-[8px] rounded-[4px] bg-transparent border border-[#3F4245] focus:outline-none"
            />
          </div>
          <div className="text-white flex flex-col gap-[5px]">
            <h4 className=" font-medium">Phone</h4>
            <input
              type="text"
              className=" w-full h-[36px] p-[8px] rounded-[4px] bg-transparent border border-[#3F4245] focus:outline-none"
            />
          </div>
          <div className="text-white flex flex-col gap-[5px]">
            <h4 className=" font-medium">Description</h4>
            <textarea
              type="text"
              className=" w-full h-[101px] p-[8px] rounded-[4px] bg-transparent border border-[#3F4245] focus:outline-none"
            />
          </div>
          <div className="">
            <button className=" bg-[#8AB4F8] h-[40px] border border-[#3F4245] px-[35px] py-[10px] w-full text-[#202124] font-semibold">
              Save
            </button>
          </div>
        </div>
      </Drawer>
      <div className=" mx-6 my-3 min-h-screen text-white">
        <div className="flex justify-between items-center mb-[50px]">
          <div>
            <h3 className=" text-[22px] font-[600] text-white mb-[8px]">
              Manage Brands
            </h3>
            <p className=" text-[14px] font-[500] tracking-[0.15px] text-white/70">
              Inventory / Manage Brands
            </p>
          </div>
          <Group className="">
            <button
              onClick={open}
              className="px-[16px] py-[7px] cursor-pointer flex items-center gap-2 text-[#202124] font-[600]  bg-[#8AB4F8] rounded-[5px] transition-all hover:bg-[#8ab4f8a7]"
            >
              Add Brand
            </button>
          </Group>
        </div>

        <div className="">
          <div className=" flex items-center justify-between">
            <h3 className=" text-[22px] text-white font-semibold">
              Brand Overview
            </h3>
            <div className="flex items-center justify-between gap-[10px] bg-transparent border border-[#3F4245] rounded-[5px] w-[260px] h-[34px] px-[11px]">
              <FiSearch className="w-[17px] h-[17px] pt-[2px] cursor-pointer" />
              <input
                placeholder="Search"
                type="text"
                className=" bg-transparent rounded-[5px] w-full h-[34px] focus:outline-none placeholder:text-[14px] placeholder:font-semibold placeholder:text-[#E8EAED]"
              />
            </div>
          </div>

          <div className=" flex items-start justify-between mt-[20px]">
            <div className=" px-[10px] py-[5px] border border-[#7E7F80] rounded-[5px]">
              <button className="  pr-[5px] border-r border-[#7E7F80]">
                this month
              </button>
              <button className=" pl-[5px] text-[#8AB4F8]">Last month</button>
            </div>

            <div className=" flex items-center gap-5">
              <div>
                <p className="flex items-center gap-2 text-[#7E7F80] text-[14px]">
                  Sort :{" "}
                  <button className=" flex gap-1 items-center text-white">
                    Last <IoIosArrowDown className="pt-[2px] text-[#8AB4F8]" />
                  </button>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-[#7E7F80] text-[14px]">
                  Filter :{" "}
                  <button className=" flex gap-1 items-center text-white">
                    All files{" "}
                    <IoIosArrowDown className="pt-[2px] text-[#8AB4F8]" />
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[30px]">
            <BrandsTable brandsData={brandsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageBrands;
