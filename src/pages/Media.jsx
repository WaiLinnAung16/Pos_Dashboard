import React, { useState } from "react";
import { BiGridAlt } from "react-icons/bi";
import { BsListUl } from "react-icons/bs";
import MediaGrid from "../components/Media/MediaGrid";
import MediaTable from "../components/Media/MediaTable";
import MediaDropZone from "../components/Media/MediaDropZone";
import { useGetPhotoQuery } from "../redux/services/authApi";
import Cookies from "js-cookie";
const Media = () => {
  const [toggle, setToggle] = useState(true);
  const token = Cookies.get("token");
  const { data: media } = useGetPhotoQuery(token);
  console.log(media);
  return (
    <div className="bg-[#202124] p-5 min-h-screen">
      <div className="flex flex-col gap-1 mb-5">
        <h1 className="font-bold text-white text-2xl">Media</h1>
        <p className="text-white/70">
          Media <span className="text-[#8AB4F8]">/</span> Uploader
        </p>
      </div>
      {/* Drop Zone */}
      <MediaDropZone />
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="text-white/70">
              Media <span className="text-[#8AB4F8]">/</span> Uploaded Photo
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 w-[59px] h-[28px] bg-transparent border rounded-[5px] px-[5px] border-[#7E7F80] text-white">
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
        <div className="mt-5">
          {toggle ? (
            <MediaTable media={media?.data} />
          ) : (
            <MediaGrid media={media?.data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Media;
