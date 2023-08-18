import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";

export function MediaDropZone() {
  const theme = useMantineTheme();
  return (
    <Dropzone
      onDrop={(files) => console.log("accepted files", files)}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
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
}
