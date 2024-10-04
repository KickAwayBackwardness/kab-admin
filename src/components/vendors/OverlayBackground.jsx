import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHumburger } from "../../redux/humburgerSlice";

const OverlayBackground = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.humburgerSlice);

  return (
    <div
      className={`fixed top-0 left-0  w-[100vw] h-[100vh] bg-white 
      overflow-hidden  transition-all duration-500
      ${isOpen ? "z-[19] opacity-80" : "z-[-1] opacity-0"}
      
    `}
      onClick={() => dispatch(toggleHumburger())}
    ></div>
  );
};

export default OverlayBackground;
