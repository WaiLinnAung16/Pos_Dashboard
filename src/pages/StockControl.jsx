import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import StockTable from "../components/Stock/StockTable";
import Cookies from "js-cookie";
import { useGetProductsQuery } from "../redux/services/productApi";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
const StockControl = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const token = Cookies.get("token");
  const { data: products } = useGetProductsQuery(token);
  const productsData = products?.data;
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        size={"319px"}
        title="Add Stock"
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
        <div className="mt-[20px] flex flex-col gap-[20px]">
          <div className="text-white flex flex-col gap-[5px]">
            <h4 className=" font-medium">Quantity</h4>
            <input
              type="text"
              className=" w-full h-[36px] p-[8px] rounded-[4px] bg-transparent border border-[#3F4245] focus:outline-none"
            />
          </div>

          <div className="text-white flex flex-col gap-[5px]">
            <h4 className=" font-medium">More</h4>
            <textarea
              type="text"
              className=" w-full h-[101px] p-[8px] rounded-[4px] bg-transparent border border-[#3F4245] focus:outline-none"
            />
          </div>
          <div className="">
            <button
              onClick={close}
              className=" bg-[#8AB4F8] h-[40px] border border-[#3F4245] px-[35px] py-[10px] w-full text-[#202124] font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </Drawer>
      <div className=" mx-6 my-3 min-h-screen text-white">
        <div className="flex justify-between items-center mb-[50px]">
          <div>
            <h3 className=" text-[22px] font-[600] text-white mb-[8px]">
              Stock Control
            </h3>
            <p className=" text-[14px] font-[500] tracking-[0.15px] text-white/70">
              Inventory / Stock control
            </p>
          </div>
          <div>
            <button
              onClick={open}
              className="px-[16px] py-[7px] cursor-pointer flex items-center gap-2 text-[#202124] font-[600]  bg-[#8AB4F8] rounded-[5px] transition-all hover:bg-[#8ab4f8a7]"
            >
              Add Stock
            </button>
          </div>
        </div>

        <div className="">
          <h3 className=" text-[22px] text-white font-semibold">
            Products Overview
          </h3>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center justify-between gap-[10px] bg-transparent border border-[#3F4245] rounded-[5px] w-[260px] h-[34px] px-[11px]">
              <FiSearch className="w-[17px] h-[17px] pt-[2px] cursor-pointer" />
              <input
                placeholder="Search"
                type="text"
                className=" bg-transparent rounded-[5px] w-full h-[34px] focus:outline-none placeholder:text-[14px] placeholder:font-semibold placeholder:text-[#E8EAED]"
              />
            </div>
            <div className=" flex items-start justify-between">
              <div className=" flex items-center gap-5">
                <div>
                  <p className="flex items-center gap-2 text-[#7E7F80] text-[14px]">
                    Sort :{" "}
                    <button className=" flex gap-1 items-center text-white">
                      Last{" "}
                      <IoIosArrowDown className="pt-[2px] text-[#8AB4F8]" />
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
          </div>
        </div>

        <StockTable productsData={productsData} />
      </div>
    </>
  );
};

export default StockControl;
