import React from "react";
import CloseIcon from "./svg/CloseIcon";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";

const CloseLoginSignupButton = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="absolute w-[50px] h-[50px] top-0 right-0 border-l-[1px] border-b-[1px] border-[#dcdcdc]
        flex items-center justify-center cursor-pointer
    "
      onClick={() => dispatch(closeModal())}
    >
      <CloseIcon />
    </div>
  );
};

export default CloseLoginSignupButton;
