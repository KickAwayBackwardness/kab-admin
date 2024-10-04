import React from "react";

const FrameLeft = () => {
  return (
    <>
      <div
        className="fixed bottom-[var(--padding-outer)] left-0 w-frame_left h-frame_side  bg-transparent  z-[10]
    pl-[var(--padding-outer)]"
      >
        <div className="w-full h-full border-frame border-frame_color border-t-0 rounded-bl-frame "></div>
      </div>
      <div className="fixed bottom-[var(--padding-outer)] left-0 w-frame_left h-frame_side  bg-white z-[1] "></div>
    </>
  );
};

export default FrameLeft;
