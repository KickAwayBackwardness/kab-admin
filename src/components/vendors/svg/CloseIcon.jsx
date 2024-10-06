import React from "react";

const CloseIcon = () => {
  return (
    <div
      className="w-close_icon h-close_icon flex items-center justify-center cursor-pointer 
      border-b-side_menu border-line-light"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12.82 12.28"
        className="block w-[15px] h-[15px] stroke-black "
      >
        <path
          d="M12.82 12.16 8.34 7.91M0 0l4.56 4.32"
          className="stroke-black stroke-2 "
        ></path>
        <path d="M.34 12.28 12.54.22" className="stroke-black stroke-2"></path>
      </svg>
    </div>
  );
};

export default CloseIcon;
