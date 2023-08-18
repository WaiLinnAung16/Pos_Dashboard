import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";
import { BsListUl } from "react-icons/bs";
import MediaGrid from "../components/MediaGrid";
import MediaTable from "../components/MediaTable";
import { MediaDropZone } from "../components/MediaDropZone";
const Media = () => {
  const [toggle, setToggle] = useState(true);

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
      {/* <div className="bg-[#161618] text-white border border-[#3f4245] rounded-md w-full p-10 mt-5 flex flex-col items-center gap-5 cursor-pointer select-none">
        <div className="w-[120px] h-[120px] rounded-full bg-[#7E7F800D]  grid place-content-center">
          <div className="  w-[80px] h-[80px] border-2 border-dotted border-[#8AB4F8] rounded-full grid place-content-center">
            <AiOutlineCloudUpload className="text-3xl" />
          </div>
        </div>

        <p>
          <span className="text-[#8AB4F8] underline">Browse</span> or Drag an
          Image
        </p>
      </div> */}
      {/* Upload */}
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
        <div className="mt-5">{toggle ? <MediaGrid /> : <MediaTable />}</div>
      </div>
    </div>
  );
};

export default Media;
