import React from "react";

const FrameTop = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100vw] h-frame_top bg-transparent
        p-[var(--padding-outer)] pb-0 z-[10] flex justify-end pointer-events-none "
      >
        <div className="w-frame_x h-full border-frame border-frame_color border-l-0 rounded-tr-frame"></div>
      </div>
      <div className=" fixed  top-[0px] left-0 w-[100vw] h-frame_top bg-white z-[2] "></div>
    </>
  );
};

export default FrameTop;
