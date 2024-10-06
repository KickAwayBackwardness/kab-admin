import React from "react";
import WellcomeBackText from "../vendors/svg/WellcomeBackText";
import SignupText from "../vendors/svg/SignupText";
import { useDispatch } from "react-redux";
import { setIsSignup } from "../../redux/modalSlice";
import CloseLoginSignupButton from "../vendors/CloseLoginSignupButton";
import Form from "./Form";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="clip-path-modal  max-w-[550px] py-[35px] px-[70px] w-[535px] rounded-[20px] bg-white h-fit relative z-[5]">
      <div className=" flex flex-col justify-center items-center">
        <img src="/public/img/KAB..svg" className="w-[30%]" alt="logo" />
        <WellcomeBackText />
        <Form />
        <div className="mt-[40px] mb-[20px] flex items-center justify-center gap-[10px]">
          <span className=" text-[#9b9b9b]">Don't have an account? </span>
          <div onClick={() => dispatch(setIsSignup())}>
            <SignupText color="black" />
          </div>
        </div>
      </div>

      <CloseLoginSignupButton />
    </div>
  );
};

export default Login;
