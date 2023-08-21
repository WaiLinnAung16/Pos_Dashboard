import { Group, rem } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { LuEdit3 } from "react-icons/lu";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
const PhotoUploadForm = () => {
  return (
    // <div className="bg-[#161618] text-white border border-[#3f4245] rounded-md w-[700px] h-[450px] p-10 mt-5 flex flex-col items-center gap-5">
    //   <h1 className="font-bold text-xl">Upload Photo</h1>
    //   <div className="relative cursor-pointer w-[200px] h-[200px] border-2 border-dotted border-[#8AB4F8] rounded-full grid place-content-center">
    //     <MdOutlineAddPhotoAlternate className="text-3xl" />

    //     <div className="absolute bottom-2 right-4 w-10 h-10 grid place-content-center rounded-full bg-white text-black border shadow">
    //       <LuEdit3 />
    //     </div>
    //   </div>
    //   <button className="bg-transparent border border-white px-4 py-2 rounded">
    //     Clear Photo
    //   </button>
    // </div>
    <Dropzone
      onDrop={(files) => console.log("accepted files", files)}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
      multiple={true}
      accept={IMAGE_MIME_TYPE}
      styles={{
        root: {
          backgroundColor: "#161618",
          border: "1px dotted #3f4245",

          "&:hover": {
            backgroundColor: "#202124",
          },
        },
      }}
    >
      <Group
        position="center"
        spacing="xl"
        style={{ minHeight: rem(220), pointerEvents: "none" }}
      >
        <Dropzone.Accept></Dropzone.Accept>
        <Dropzone.Reject></Dropzone.Reject>
        <Dropzone.Idle></Dropzone.Idle>

        <div className=" text-white  w-full p-10 mt-5 flex flex-col items-center gap-5 cursor-pointer select-none">
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
      </Group>
    </Dropzone>
  );
};

export default PhotoUploadForm;
