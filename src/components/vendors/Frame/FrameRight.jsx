import React from "react";

const FrameRight = () => {
  return (
    <>
      <div
        className="fixed bottom-[var(--padding-outer)] right-0 w-frame_right h-frame_side  pr-[var(--padding-outer)] pb-[var(--padding-outer)] bg-transparent z-[10]
        before:w-[var(--padding-outer)] before:h-[var(--padding-outer)] before:absolute before:bottom-[0px] before:left-frame_br_curve 
        before:z-[-1] before:bg-transparent before:border-r-frame before:border-b-frame before:overflow-hidden before:border-frame_color before:rounded-br-frame
    "
      >
        <div className="w-full h-full border-l-frame border-frame_color relative z-[1]"></div>
      </div>
      <div className="fixed bottom-[var(--padding-outer)] right-0 w-frame_right h-frame_side  bg-white z-[1]"></div>
    </>
  );
};

export default FrameRight;
