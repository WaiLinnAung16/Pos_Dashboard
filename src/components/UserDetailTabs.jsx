import { Tabs } from "@mantine/core";
import React from "react";
import { BsInfoCircle, BsPerson } from "react-icons/bs";
import { BiLockOpen } from "react-icons/bi";
const UserDetailTabs = () => {
  return (
    <Tabs
      mt="lg"
      defaultValue="personal"
      variant="unstyled"
      styles={{
        tab: {
          color: "#878787",
          backgroundColor: "transparent",
          margin: "0px 10px",
          padding: "15px",

          "&:hover": {
            color: "white",
          },

          "&[data-active]": {
            color: "white",
          },
        },
        panel: {
          color: "white",
          padding: "25px",
          backgroundColor: "#1A1A1A",
        },
        tabIcon: {
          color: "#8AB4F8",
          fontSize: "16px",
        },
      }}
    >
      <Tabs.List>
        <Tabs.Tab value="personal" icon={<BsPerson />}>
          Personal
        </Tabs.Tab>
        <Tabs.Tab value="Login information" icon={<BsInfoCircle />}>
          Login information
        </Tabs.Tab>
        <Tabs.Tab value="password" icon={<BiLockOpen />}>
          Password
        </Tabs.Tab>
      </Tabs.List>
      <hr />
      <Tabs.Panel value="personal" pt="xs">
        <div className="grid grid-cols-7">
          <div className="col-span-2 flex flex-col gap-3">
            <p>Phone</p>
            <p>Mail</p>
            <p>Address</p>
            <p>Gender</p>
            <p>Date of birth</p>
          </div>
          <div className="col-span-5 flex flex-col gap-3">
            <p>: 0985678787</p>
            <p>: ethan123@gmail.com</p>
            <p>: No2 ,Baho Street ,Bahan ,Yagon.</p>
            <p>: Male</p>
            <p>: 12/4/19999</p>
          </div>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="Login information" pt="xs">
        Login information tab content
      </Tabs.Panel>
      <Tabs.Panel value="password" pt="xs">
        password tab content
      </Tabs.Panel>
    </Tabs>
  );
};

export default UserDetailTabs;
