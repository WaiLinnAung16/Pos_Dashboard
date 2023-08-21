import React from "react";
import { IoIosMenu } from "react-icons/io";
import "./sidebar.css";
import { Accordion, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, NavLink } from "react-router-dom";

import overview from "../../../public/overview.svg";
import sale from "../../../public/sale.svg";
import iventory from "../../../public/iventory.svg";
import user from "../../../public/user.svg";
import media from "../../../public/media.svg";
import profile from "../../../public/profile.svg";
import logout from "/logout.svg";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/services/authApi";
import { removeUser } from "../../redux/slices/authSlice";
import Cookies from "js-cookie";

const Sidebar = () => {
  const [openedSidebar, { open, close, toggle }] = useDisclosure(false);
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const [Logout] = useLogoutMutation();

  const logoutHandler = async () => {
    const { data } = await Logout(token);
    console.log(data);
    dispatch(removeUser());
  };
  return (
    <>
      <div
        className={`sticky h-screen ${
          openedSidebar && "sidebar-close"
        } bg-[#161618] border-[#3F4245] text-[#DFDFDF] select-none w-[300px] transition-all duration-500 max-xl:hidden sidebar top-0 font-nunito`}
      >
        <div>
          <div className="sticky top-0 z-50 flex items-center gap-5 h-[56px] px-6 border-b-[1px] bg-[#202124] border-[#3F4245]">
            <div
              onClick={toggle}
              className=" relative sidebar-menu text-3xl cursor-pointer "
            >
              <IoIosMenu />
            </div>

            <div className=" w-[117px] logo-container">
              <NavLink to={`/`} className="focus-visible:outline-none">
                <img className="" src={""} alt="" />
              </NavLink>
            </div>
          </div>

          <ScrollArea
            h={680}
            scrollbarSize={8}
            scrollHideDelay={500}
            className="border-[#3F4245] border-r"
          >
            <div className=" w-[300px] sidebar-body">
              <ul className="py-8 px-6 space-y-5 list-group">
                <li className="list-item">
                  <NavLink
                    to={`/`}
                    className="side-menu "
                    onClick={() => {
                      close();
                    }}
                  >
                    <div className="flex items-center gap-3 text-2xl hover:text-white">
                      <img src={overview} alt="" />
                      <span className=" list-text text-[15px] font-[600]">
                        Overview
                      </span>
                    </div>
                  </NavLink>
                </li>

                <li className="list-item">
                  <Accordion className="">
                    <Accordion.Item value="photos">
                      <Accordion.Control>
                        {/* <NavLink to={'/'} className="side-menu"> */}
                        <div
                          className={` side-menu flex items-center gap-3 text-2xl text-[#DFDFDF]  hover:text-white`}
                        >
                          <img src={sale} alt="" />
                          <span className=" list-text text-[15px] font-[500]">
                            Sale
                          </span>
                        </div>
                        {/* </NavLink> */}
                      </Accordion.Control>
                      <Accordion.Panel>
                        <ul className=" text-[#DFDFDF] booking-list space-y-3">
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/booking`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">Cashier</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/booking-add`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">Recent</span>
                            </NavLink>
                          </li>
                        </ul>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </li>

                <li className="list-item">
                  <Accordion className="">
                    <Accordion.Item value="photos">
                      <Accordion.Control>
                        {/* <NavLink to={'/'} className="side-menu"> */}
                        <div
                          className={` side-menu flex items-center gap-3 text-2xl text-[#DFDFDF]  hover:text-white`}
                        >
                          <img src={iventory} alt="" />
                          <span className=" list-text text-[15px] font-[500]">
                            Inventory
                          </span>
                        </div>
                        {/* </NavLink> */}
                      </Accordion.Control>
                      <Accordion.Panel>
                        <ul className=" text-[#DFDFDF] booking-list space-y-3">
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/products`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">Products</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/add-products`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">Add Products</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/stock-control`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">Stocks Control</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/manage-brands`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">Manage Brands</span>
                            </NavLink>
                          </li>
                        </ul>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </li>

                <li className="list-item">
                  <Accordion className="">
                    <Accordion.Item value="photos">
                      <Accordion.Control>
                        {/* <NavLink to={'/'} className="side-menu"> */}
                        <div
                          className={` side-menu flex items-center gap-3 text-2xl text-[#DFDFDF]  hover:text-white`}
                        >
                          <img src={user} alt="" />
                          <span className=" list-text text-[15px] font-[500]">
                            User
                          </span>
                        </div>
                        {/* </NavLink> */}
                      </Accordion.Control>
                      <Accordion.Panel>
                        <ul className=" text-[#DFDFDF] booking-list space-y-3">
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/user-overview`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">Overview</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/user-create`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">Create User</span>
                            </NavLink>
                          </li>
                        </ul>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </li>

                <li className="list-item">
                  <NavLink
                    to={`/media`}
                    className="side-menu"
                    onClick={() => {
                      close();
                    }}
                  >
                    <div className=" flex items-center gap-3 text-2xl  hover:text-white">
                      <img src={media} alt="" />
                      <span className="list-text text-[15px] font-[700]">
                        Media
                      </span>
                    </div>
                  </NavLink>
                </li>

                <li className="list-item">
                  <Accordion className="">
                    <Accordion.Item value="photos">
                      <Accordion.Control>
                        {/* <NavLink to={'/'} className="side-menu"> */}
                        <div
                          className={` side-menu flex items-center gap-3 text-2xl text-[#DFDFDF]  hover:text-white`}
                        >
                          <img src={profile} alt="" />
                          <span className=" list-text text-[15px] font-[500]">
                            Profile
                          </span>
                        </div>
                        {/* </NavLink> */}
                      </Accordion.Control>
                      <Accordion.Panel>
                        <ul className=" text-[#DFDFDF] booking-list space-y-3">
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/profile`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">My Account</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/profile-edit`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">Edit</span>
                            </NavLink>
                          </li>
                        </ul>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </li>

                <li className="list-item">
                  <button
                    className="side-menu"
                    onClick={() => {
                      logoutHandler();
                      close();
                    }}
                  >
                    <div className=" flex items-center gap-3 text-2xl  hover:text-white">
                      <img src={logout} alt="" />
                      <span className="list-text text-[15px] font-[700]">
                        Logout
                      </span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
