import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import clock from "../../public/Clock.svg";
import envelope from "../../public/EnvelopeOpen.svg";
import phoneCall from "../../public/PhoneCall.svg";
import saleColor from "../../public/saleColor.svg";
import pencil from "../../public/PencilSimpleLine.svg";
import { Tabs } from "@mantine/core";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
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

        <div className=" mt-10">
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

            <Tabs.Panel value="gallery" pt="xs">
              <div className="pl-16 pr-8 flex flex-col gap-[30px] py-[30px]">
                <div className=" flex items-center gap-[118px]">
                  <p className=" text-[#B9B9B9] text-[18px] font-[600]">
                    Date of Birth
                  </p>
                  <p className=" text-[18px] font-[500] leading-[21.94px]">
                    : 12/4/1999
                  </p>
                </div>
                <div className=" flex items-center gap-[164px]">
                  <p className=" text-[#B9B9B9] text-[18px] font-[600]">
                    Gender
                  </p>
                  <p className=" text-[18px] font-[500] leading-[21.94px]">
                    : Male
                  </p>
                </div>
                <div className=" flex items-center gap-[159px]">
                  <p className=" text-[#B9B9B9] text-[18px] font-[600]">
                    Address
                  </p>
                  <p className=" text-[18px] font-[500] leading-[21.94px]">
                    : No2 ,Baho Street ,Bahan ,Yagon.
                  </p>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="messages" pt="xs">
              <div className="pl-16 pr-8 flex flex-col gap-[30px] py-[30px]">
                <div className=" flex items-center gap-[140px]">
                  <p className=" text-[#B9B9B9] text-[18px] font-[600]">
                    Phone
                  </p>
                  <p className=" text-[18px] font-[500] leading-[21.94px]">
                    : 0985678787
                  </p>
                </div>
                <div className=" flex items-center gap-[127px]">
                  <p className=" text-[#B9B9B9] text-[18px] font-[600]">
                    Position
                  </p>
                  <p className=" text-[18px] font-[500] leading-[21.94px]">
                    : Sale Executive
                  </p>
                </div>
                <div className=" flex items-center gap-[158px]">
                  <p className=" text-[#B9B9B9] text-[18px] font-[600]">Mail</p>
                  <p className=" text-[18px] font-[500] leading-[21.94px]">
                    : ethan123@gmail.com
                  </p>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="settings" pt="xs">
              Password tab content
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
