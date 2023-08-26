import React from "react";

const MediaGrid = ({ media }) => {
  console.log(media);
  return (
    <div className=" grid grid-cols-12 gap-5">
      {media?.map((detail) => {
        return (
          <div key={detail?.id} className=" col-span-2 rounded-md h-[150px]">
            <img src={detail?.url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default MediaGrid;
