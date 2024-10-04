import React from "react";
import { useDispatch } from "react-redux";
import { togglePreview } from "../../../redux/previewSlice";

const PreviewSubMenu = () => {
  const dispatch = useDispatch();
  return (
    <section
      className="fixed z-[101] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-sub_header_bg rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${
         h-[72px] min-w-0 transition-default"
    >
      <div>
        <div
          className={`h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px] transition-default `}
        >
          <div className=" cursor-pointer">
            <div>
              <img
                src="/img/X-white.svg"
                alt="small logo"
                style={{ width: `15px` }}
              />
            </div>
          </div>
          <p className="ml-1 mr-3">preview</p>
          <i className=" cursor-pointer fa fa-bars"></i>
        </div>
      </div>
      <div
        className="ml-[6px] bg-[#3e3e3e] text-white rounded-[8px] h-[60px] flex items-center px-[6px] min-w-[100px] justify-center cursor-pointer"
        onClick={() => dispatch(togglePreview())}
      >
        <p>Close</p>
      </div>
    </section>
  );
};

export default PreviewSubMenu;
