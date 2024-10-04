import React, { useState } from "react";
import MainMenu from "./MainMenu";
import { useDispatch } from "react-redux";
import { preview } from "../../redux/addNewPostSlice";

const NewPost = () => {
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
          <p className="mr-3">new-post</p>
          <i className=" cursor-pointer fa fa-bars"></i>
        </div>
      </div>
      {!isShow && (
        <div className="ml-[6px] bg-[#3e3e3e] text-white rounded-[8px] h-[60px] flex items-center px-[6px]">
          <div className="h-[48px] flex">
            <div
              className="h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border transition-default cursor-pointer 
              border-[#4e4e4e] hover:border-[#a7a7a7]"
            >
              General
            </div>
            <div
              className="h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border transition-default cursor-pointer 
              border-[#4e4e4e] hover:border-[#a7a7a7]"
            >
              Title
            </div>
            <div
              className="h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border transition-default cursor-pointer 
              border-[#4e4e4e] hover:border-[#a7a7a7]"
            >
              Cover
            </div>
            <div
              className="h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border transition-default cursor-pointer 
              border-[#4e4e4e] hover:border-[#a7a7a7]"
            >
              Content
            </div>
          </div>
        </div>
      )}

      {!isShow && (
        <div className="ml-[6px] bg-error text-black rounded-[8px] h-[60px] flex items-center px-[6px] cursor-pointer">
          <p className="flex items-center px-[20px] font-semibold text-nowrap text-white ">
            Draft
          </p>
        </div>
      )}
      {!isShow && (
        <div
          className="ml-[6px] bg-lemon text-black rounded-[8px] h-[60px] flex items-center px-[6px] cursor-pointer"
          // href="/newspaper/preview/sec"
          // target="_blank"

          // onClick={() => window.open("/newspaper/preview/sec", "_blank")}
          onClick={() => dispatch(preview())}
        >
          <p className="flex items-center px-[20px] font-semibold">
            Preview <i className="fa fa-external-link-alt ml-1"></i>
          </p>
        </div>
      )}
    </section>
  );
};

export default NewPost;
