import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { BsListUl } from "react-icons/bs";
import { BiGridAlt } from "react-icons/bi";
import { useGetProductsQuery } from "../redux/services/productApi";
import Cookies from "js-cookie";
import ProductsTable from "../components/Products/ProductsTable";
import ProductsGrid from "../components/Products/ProductsGrid";

const Products = () => {
  const [toggle, setToggle] = useState(true);
  const token = Cookies.get("token");
  const { data: products, isLoading } = useGetProductsQuery(token);

  return (
    <div className=" mx-6 my-3 min-h-screen text-white">
      <div className="flex justify-between items-center mb-[50px]">
        <div>
          <h3 className=" text-[22px] font-[600] text-white mb-[8px]">
            Products
          </h3>
          <p className=" text-[14px] font-[500] tracking-[0.15px] text-white/70">
            Inventory / Products
          </p>
        </div>
        <div className=" flex items-center gap-3">
          <Link
            to={"/profile-edit"}
            className="px-[16px] py-[7px] cursor-pointer flex items-center gap-2 font-[600] bg-transparent border border-[#7E7F80] text-[#8AB4F8] rounded-[5px]"
          >
            Go to Shop
          </Link>
          <Link to={"/add-products"} className="customButton">
            Add Products
          </Link>
        </div>
      </div>

      <div className="">
        <div className=" flex items-center justify-between">
          <h3 className=" text-[22px] text-white font-semibold">
            Products Overview
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

            <div className="flex items-center justify-center gap-3 w-[59px] h-[28px] bg-transparent border rounded-[5px] px-[5px] border-[#7E7F80]">
              <div
                className={toggle ? "text-[#8AB4F8]" : ""}
                onClick={() => setToggle(true)}
              >
                <BsListUl />
              </div>
              <div
                className={toggle ? "" : "text-[#8AB4F8]"}
                onClick={() => setToggle(false)}
              >
                <BiGridAlt />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[30px]">
          {toggle ? (
            <ProductsTable
              productsData={products?.data}
              isLoading={isLoading}
            />
          ) : (
            <ProductsGrid productsData={products?.data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
