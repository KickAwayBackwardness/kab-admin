import React, { useState } from "react";
import Overlay from "../Overlay/Overlay";
import { useDispatch, useSelector } from "react-redux";
import SigninText from "../vendors/svg/SigninText";
import { setIsLogin } from "../../redux/modalSlice";
import CloseLoginSignupButton from "../vendors/CloseLoginSignupButton";

const ForceLogin = () => {
  const dispatch = useDispatch();
  const { forceLogin } = useSelector((state) => state.modalSlice);

  if (!forceLogin) {
    return null;
  }

  return (
    <section className=" fixed top-0 left-0 z-[10] w-[100vw] h-[100vh] flex items-center justify-center">
      <Overlay />
      <div className="clip-path-modal  max-w-[550px] py-[35px] px-[70px] w-[535px] rounded-[20px] bg-white h-fit relative z-[5]">
        <div className=" flex flex-col justify-center items-center">
          <img src="/img/KAB..svg" className="w-[30%]" alt="logo" />
          <p className="mt-[30px] text-[18px]">
            Bắt buộc <b className="font-bold">đăng nhập</b> để sử dụng dịch vụ.
          </p>
          <div className="mt-[40px] mb-[20px] flex items-center justify-center gap-[10px]">
            <span className=" text-[#9b9b9b]">Already have an account? </span>
            <div
              onClick={() => {
                dispatch(setIsLogin());
              }}
            >
              <SigninText color="black" />
            </div>
          </div>
        </div>
        <CloseLoginSignupButton />
      </div>
    </section>
  );
};

export default ForceLogin;
