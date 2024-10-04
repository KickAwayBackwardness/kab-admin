import React from "react";

const FrameBottom = () => {
  return (
    <>
      <div
        className="fixed bottom-0 right-[var(--padding-outer)] w-frame_x h-frame_bottom pr-[var(--padding-outer)] bg-transparent 
      z-[10]"
      >
        <div className="border-t-frame border-frame_color w-full h-full"></div>
      </div>
      <div className=" fixed  bottom-[0px] left-0 w-[100vw] h-frame_bottom  bg-white z-[2] "></div>
    </>
  );
};

export default FrameBottom;
