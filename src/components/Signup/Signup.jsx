import React from "react";
import SignupText from "../vendors/svg/SignupText";
import BecomeAKickerText from "../vendors/svg/BecomeAKickerText";
import SigninText from "../vendors/svg/SigninText";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../redux/modalSlice";
import CloseLoginSignupButton from "../vendors/CloseLoginSignupButton";

const Signup = () => {
  const dispatch = useDispatch();
  return (
    <div className="clip-path-modal  max-w-[550px] py-[35px] px-[70px] w-[535px] rounded-[20px] bg-white h-fit relative z-[5]">
      <div className=" flex flex-col justify-center items-center">
        <img src="/public/img/KAB..svg" className="w-[30%]" alt="logo" />
        <BecomeAKickerText />
        <form className="w-full">
          <div>
            <input
              className="input-default mb-[20px]"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-[20px]">
            <input className="input-default" type="text" placeholder="Email" />
          </div>
          <div className="mb-[20px]">
            <input
              className="input-default"
              type="text"
              placeholder="Full name"
            />
          </div>
          <div className="mb-[20px]">
            <input
              className="input-default"
              type="text"
              placeholder="Password"
            />
          </div>
          <div>
            <button className="button clip-path-button bg-black text-white w-full h-[50px] mb-[16px] flex justify-center items-center">
              <SignupText color="white" />
            </button>
          </div>
        </form>
        <div className="mt-[40px] mb-[20px] flex items-center justify-center gap-[10px]">
          <span className=" text-[#9b9b9b]">Already have an account? </span>
          <div onClick={() => dispatch(setIsLogin())}>
            <SigninText color="black" />
          </div>
        </div>
      </div>
      <CloseLoginSignupButton />
    </div>
  );
};

export default Signup;
