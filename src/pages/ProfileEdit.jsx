import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import clock from "../../public/Clock.svg";
import envelope from "../../public/EnvelopeOpen.svg";
import phoneCall from "../../public/PhoneCall.svg";
import saleColor from "../../public/saleColor.svg";
import pencil from "../../public/PencilSimpleLine.svg";
import { Tabs } from "@mantine/core";
import { Link } from "react-router-dom";
import { Radio } from "@mantine/core";

const ProfileEdit = () => {
  return (
    <div className=" relative">
      <div className=" mx-6 my-3">
        <div className="flex justify-between items-center mb-20">
          <div>
            <h3 className=" text-[22px] font-[600] text-white mb-[8px]">
              Profile
            </h3>
            <p className=" text-[14px] font-[500] tracking-[0.15px] text-white/70">
              Profile/ My Account/ Information
            </p>
          </div>
          <div className="">
            <Link
              to={"/profile-edit"}
              className="px-[16px] py-[7px] cursor-pointer flex items-center gap-2 text-[#202124] font-[600]  bg-[#8AB4F8] rounded-[5px]"
            >
              <AiOutlinePlus size={16} />
              Edit Profile
            </Link>
          </div>
        </div>

        <div className="bg-[#1A1A1A] text-white ">
          <div className=" flex justify-between items-end pl-16 pr-8">
            <div className=" flex items-end gap-[33px] mt-[-50px]">
              <div className="relative">
                <img
                  className=" w-[139px] h-[139px] object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className=" absolute bottom-0 right-0 border-[1.63px] border-black w-[39px] h-[39px] flex items-center justify-center  rounded-full bg-white">
                  <img src={pencil} alt="" />
                </div>
              </div>
              <div>
                <h3 className=" text-[26px] font-[600]">Ethan James</h3>
                <p className=" text-[14px] font-[500] text-[#C5C1C1] flex items-center gap-1">
                  Sale Executive /{" "}
                  <span className="flex  gap-1 text-[10px] font-[500] text-[#C5C1C1]">
                    <img src={clock} alt="" />
                    Active in 1hr
                  </span>
                </p>
              </div>
            </div>

            <div className=" flex items-center gap-[10px]">
              <div className=" w-[33px] h-[33px] rounded-full bg-[#202124] flex items-center justify-center">
                <img src={envelope} alt="" />
              </div>
              <div className=" w-[33px] h-[33px] rounded-full bg-[#202124] flex items-center justify-center">
                <img src={phoneCall} alt="" />
              </div>
            </div>
          </div>

          <div className=" mt-10 pb-28">
            <Tabs
              styles={{
                tabsList: {
                  paddingBottom: "20px",
                  paddingLeft: "64px",
                  paddingRight: "32px",
                  fontWeight: "600",
                  border: "#878787",
                },
                tab: {
                  color: "#878787",
                  borderBottom: "none",
                  gap: "5px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&[data-active]": {
                    color: "white",
                  },
                },
              }}
              color="gray"
              radius="xs"
              defaultValue="gallery"
            >
              <Tabs.List>
                <Tabs.Tab value="gallery" icon={<img src={saleColor} />}>
                  Personal
                </Tabs.Tab>
                <Tabs.Tab value="messages" icon={<img src={saleColor} />}>
                  Login information
                </Tabs.Tab>
                <Tabs.Tab value="settings" icon={<img src={saleColor} />}>
                  Password
                </Tabs.Tab>
              </Tabs.List>

              <hr className=" border-[#3F4245]" />

              <Tabs.Panel value="gallery" pt="xs" className=" max-w-[700px]">
                <div className="pl-16 pr-8 flex flex-col gap-[30px] py-[30px]">
                  <div className=" flex justify-between">
                    <label className="text-[#FFFFFF] text-[18px] font-[600]">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="text-[14px] px-4 font-[500] leading-[21.94px] w-[382px] h-[36px] bg-[#202124] border border-[#7E7F80] rounded-[4px] placeholder:text-[14px] placeholder:text-[#4F4F50] focus:outline-none"
                    />
                  </div>

                  <div className=" flex justify-between">
                    <label className="text-[#FFFFFF] text-[18px] font-[600]">
                      Phone
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="text-[14px] px-4 font-[500] leading-[21.94px] w-[382px] h-[36px] bg-[#202124] border border-[#7E7F80] rounded-[4px] placeholder:text-[14px] placeholder:text-[#4F4F50] focus:outline-none"
                    />
                  </div>

                  <div className=" flex justify-between">
                    <label className="text-[#FFFFFF] text-[18px] font-[600]">
                      Date of Birth
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="text-[14px] px-4 font-[500] leading-[21.94px] w-[382px] h-[36px] bg-[#202124] border border-[#7E7F80] rounded-[4px] placeholder:text-[14px] placeholder:text-[#4F4F50] focus:outline-none"
                    />
                  </div>

                  <div className=" flex max-w-[353px] justify-between">
                    <label className="text-[#FFFFFF] text-[18px] font-[600]">
                      Gender
                    </label>
                    <div className=" flex items-center gap-3">
                      <div className=" flex items-center gap-[5px]">
                        <input
                          class="h-5 w-5 rounded-full checked:bg-[#8AB4F8] bg-transparent border-2 appearance-none border-[#3F4245]"
                          type="radio"
                          name="gender"
                          id="radioDefault01"
                        />
                        <label
                          class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-[12px] leading-[200%] text-[#E8EAED]"
                          for="radioDefault01"
                        >
                          Male
                        </label>
                      </div>

                      <div className=" flex items-center gap-[5px]">
                        <input
                          class="h-5 w-5 rounded-full checked:bg-[#8AB4F8] bg-transparent border-2 appearance-none border-[#3F4245]"
                          type="radio"
                          name="gender"
                          id="radioDefault01"
                        />
                        <label
                          class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-[12px] leading-[200%] text-[#E8EAED]"
                          for="radioDefault01"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-between">
                    <label className="text-[#FFFFFF] text-[18px] font-[600]">
                      Address
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Your address..."
                      className="text-[14px] px-4 pt-2 font-[500] leading-[21.94px] w-[382px]  bg-[#202124] border border-[#7E7F80] rounded-[4px] placeholder:text-[14px] placeholder:text-[#4F4F50] focus:outline-none"
                    />
                  </div>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="messages" pt="xs" className=" max-w-[700px]">
                <div className="pl-16 pr-8 flex flex-col gap-[30px] py-[30px]">
                  <div className=" flex justify-between">
                    <label className="text-[#FFFFFF] text-[18px] font-[600]">
                      Phone
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="text-[14px] px-4 font-[500] leading-[21.94px] w-[382px] h-[36px] bg-[#202124] border border-[#7E7F80] rounded-[4px] placeholder:text-[14px] placeholder:text-[#4F4F50] focus:outline-none"
                    />
                  </div>

                  <div className=" flex justify-between">
                    <label className="text-[#FFFFFF] text-[18px] font-[600]">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="text-[14px] px-4 font-[500] leading-[21.94px] w-[382px] h-[36px] bg-[#202124] border border-[#7E7F80] rounded-[4px] placeholder:text-[14px] placeholder:text-[#4F4F50] focus:outline-none"
                    />
                  </div>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="settings" pt="xs" className=" max-w-[700px]">
                <div className="pl-16 pr-8 flex flex-col gap-[30px] py-[30px]">
                  <div className=" flex justify-between">
                    <label className="text-[#FFFFFF] text-[18px] font-[600]">
                      Current Password
                    </label>
                    <input
                      type="text"
                      placeholder="**********"
                      className="text-[14px] px-4 font-[500] leading-[21.94px] w-[382px] h-[36px] bg-[#202124] border border-[#7E7F80] rounded-[4px] placeholder:text-[14px] placeholder:text-[#4F4F50] focus:outline-none"
                    />
                  </div>

                  <div className=" flex justify-between">
                    <label className="text-[#FFFFFF] text-[18px] font-[600]">
                      New Password
                    </label>
                    <input
                      type="text"
                      placeholder="*************"
                      className="text-[14px] px-4 font-[500] leading-[21.94px] w-[382px] h-[36px] bg-[#202124] border border-[#7E7F80] rounded-[4px] placeholder:text-[14px] placeholder:text-[#4F4F50] focus:outline-none"
                    />
                  </div>

                  <div className=" flex justify-between">
                    <label className="text-[#B9B9B9] text-[18px] font-[600]">
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      placeholder="*************"
                      className="text-[14px] px-4 font-[500] leading-[21.94px] w-[382px] h-[36px] bg-[#202124] border border-[#7E7F80] rounded-[4px] placeholder:text-[14px] placeholder:text-[#4F4F50] focus:outline-none"
                    />
                  </div>
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="w-full h-[70px] bg-[#161618] fixed bottom-0 border-t border-[#3F4245]">
        <div className=" pl-[70px] py-[16px]">
          <button className="px-[22px] py-[7px] border border-[#7E7F80] rounded-[5px] text-[#7E7F80] text-[14px]">
            CANCEL
          </button>
          <button className="px-[22px] py-[7px] border bg-[#8AB4F8] border-[#7E7F80] rounded-[5px] text-[#161618] font-semibold ml-[8px] text-[14px] transition-all hover:bg-[#8ab4f8b1]">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
