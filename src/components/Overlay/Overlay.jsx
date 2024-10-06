import React from "react";
import { closeModal } from "../../redux/modalSlice";
import { useDispatch } from "react-redux";

const Overlay = () => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(closeModal());
  };
  return (
    <div
      className="absolute w-full h-full top-0 left-0 bg-black opacity-25 z-[1]"
      onClick={() => close()}
    ></div>
  );
};

export default Overlay;
