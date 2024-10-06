import React from "react";
import Overlay from "../Overlay/Overlay";
import { useSelector } from "react-redux";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const LoginSignup = () => {
  const { isLogin, isSignup } = useSelector((state) => state.modalSlice);
  if (!isLogin && !isSignup) {
    return null;
  }

  const renderForm = () => {
    if (isLogin) {
      return <Login />;
    }

    if (isSignup) {
      return <Signup />;
    }
  };

  return (
    <section className=" fixed top-0 left-0 z-[10] w-[100vw] h-[100vh] flex items-center justify-center">
      <Overlay />
      {renderForm()}
    </section>
  );
};

export default LoginSignup;
