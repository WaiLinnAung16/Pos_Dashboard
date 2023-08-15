import React from "react";
import { LuEdit3 } from "react-icons/lu";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
const PhotoUploadForm = () => {
  return (
    <div className="bg-[#161618] text-white border border-[#3f4245] rounded-md w-[700px] p-10 mt-5 flex flex-col items-center gap-5">
      <h1 className="font-bold text-xl">Upload Photo</h1>
      <div className="relative cursor-pointer w-[200px] h-[200px] border-2 border-dotted border-[#8AB4F8] rounded-full grid place-content-center">
        <MdOutlineAddPhotoAlternate className="text-3xl" />

        <div className="absolute bottom-2 right-4 w-10 h-10 grid place-content-center rounded-full bg-white text-black border shadow">
          <LuEdit3 />
        </div>
      </div>
      <button className="bg-transparent border border-white px-4 py-2 rounded">
        Clear Photo
      </button>
    </div>
  );
};

export default PhotoUploadForm;
