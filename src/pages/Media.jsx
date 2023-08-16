import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
const Media = () => {
  return (
    <div className="bg-[#202124] p-5 min-h-screen">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-white text-2xl">Media</h1>
        <p className="text-white/70">
          Media <span className="text-[#8AB4F8]">/</span> Uploader
        </p>
      </div>
      {/* Upload */}
      <div className="bg-[#161618] text-white border border-[#3f4245] rounded-md w-full p-10 mt-5 flex flex-col items-center gap-5 cursor-pointer select-none">
        <div className="w-[120px] h-[120px] rounded-full bg-[#7E7F800D]  grid place-content-center">
          <div className="  w-[80px] h-[80px] border-2 border-dotted border-[#8AB4F8] rounded-full grid place-content-center">
            <AiOutlineCloudUpload className="text-3xl" />
          </div>
        </div>

        <p>
          <span className="text-[#8AB4F8] underline">Browse</span> or Drag an
          Image
        </p>
      </div>
    </div>
  );
};

export default Media;
