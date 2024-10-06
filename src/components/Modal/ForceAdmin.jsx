import React, { useEffect, useState } from "react";
import Overlay from "../Overlay/Overlay";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../../redux/modalSlice";
import CloseLoginSignupButton from "../vendors/CloseLoginSignupButton";
import ChangeAccountText from "../vendors/svg/ChangeAccountText";
import { authSer } from "../../api/service/authSer";
import { tokenLocalStorage } from "../../api/localStorage";

const ForceAdmin = () => {
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(false);
  const { token } = useSelector((state) => state.authSlice);

  useEffect(() => {
    authSer
      .checkAdminPermission()
      .then(({ data }) => {
        setIsAdmin(data.content.isAdmin);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  if (isAdmin) {
    return null;
  }

  return (
    <section className=" fixed top-0 left-0 z-[10] w-[100vw] h-[100vh] flex items-center justify-center">
      <Overlay />
      <div className="clip-path-modal  max-w-[550px] py-[35px] px-[70px] w-[535px] rounded-[20px] bg-white h-fit relative z-[5]">
        <div className=" flex flex-col justify-center items-center">
          <img src="/img/KAB..svg" className="w-[30%]" alt="logo" />
          <p className="mt-[30px] text-[18px] text-error">
            {!isAdmin ? "Bạn không có quyền truy cập." : ""}
          </p>
          <div className="mt-[40px] mb-[20px] flex items-center justify-center gap-[10px]">
            <span className=" text-[#9b9b9b]">Bạn có tài khoản ADMIN? </span>
            <div
              onClick={() => {
                dispatch(setIsLogin());
              }}
            >
              <ChangeAccountText color="black" />
            </div>
          </div>
        </div>
        <CloseLoginSignupButton />
      </div>
    </section>
  );
};

export default ForceAdmin;
