import React, { useState } from "react";
import MainMenu from "./MainMenu";
import { openTypeModal } from "../../redux/modalSlice";
import { useDispatch } from "react-redux";

const Types = () => {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);

  return (
    <section
      className={`fixed z-[3] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-sub_header_bg rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${
        isShow ? "h-[393px] min-w-[720px]" : "h-[72px] min-w-0"
      } transition-default`}
    >
      <div>
        {isShow && <MainMenu />}
        <div
          className={`h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px] transition-default `}
          onClick={() => setIsShow(!isShow)}
        >
          <div className=" cursor-pointer">
            <div>
              <img
                src="/img/KAB.-white.svg"
                alt="small logo"
                className="h-[10px] w-auto mr-1"
              />
            </div>
          </div>
          <p className="mr-3">types</p>
          <i className=" cursor-pointer fa fa-bars"></i>
        </div>
      </div>

      {!isShow && (
        <div
          className="ml-[6px] bg-lemon text-black rounded-[8px] h-[60px] flex items-center px-[6px] cursor-pointer"
          onClick={() =>
            dispatch(openTypeModal({ action: "ADD", type_id: undefined }))
          }
        >
          <p className="flex items-center px-[20px] font-semibold">Thêm mới</p>
        </div>
      )}
    </section>
  );
};

export default Types;
