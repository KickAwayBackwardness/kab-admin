import React, { useState } from "react";

const FirstShow = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="mt-[36px]">
        <div
          className="pl-[25px] relative flex items-center w-fit cursor-pointer"
          onClick={() => {
            setChecked(!checked);
          }}
        >
          <div className="absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 ">
            {checked && (
              <div className="absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "></div>
            )}
          </div>
          <p className=" font-light">Tiêu đề xuất hiện đầu tiên.</p>
        </div>
        <div className="pt-[10px]">
          <span className=" text-sub_menu_index text-[12px] font-light">
            Mặc định ảnh bìa sẽ xuất hiện đầu tiên.
          </span>
        </div>
      </div>
    </>
  );
};

export default FirstShow;
