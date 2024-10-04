import React from "react";

const ButtonFrame = ({ stroke }) => {
  return (
    <div className="relative z-[0]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 185 51"
        className={`group-hover:fill-white fill-black stroke-${stroke} w-[var(--button-frame-width)] h-[var(--button-frame-height)]`}
      >
        <path
          d="M 0 4 Q 0 0, 5 0L 181 0 Q 185 0, 185 4L 185 37 Q 185 38, 183 41L 177 47 Q 174 50, 171 51L 4 51 Q 0 51, 0 47L 0 4"
          className="path"
        ></path>
      </svg>
      <div
        className="group-hover:h-[40px] group-hover:w-[40px] group-hover:bg-white absolute 
      w-[10px] h-[10px] bg-black left-button_frame_corner_effect_left top-button_frame_corner_effect_top z-[-1] 
      rounded-br-[var(--button-frame-rounded)]
      transition-all duration-500 ease-in-out 
      "
      ></div>
    </div>
  );
};

export default ButtonFrame;
