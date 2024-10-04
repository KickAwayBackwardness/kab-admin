import React from "react";
import Type from "./Type";
import Topic from "./Topic";

const General = () => {
  return (
    <>
      <div className="flex  w-[100%] gap-[30px]">
        {/* left */}
        <div className="w-[20%]">
          <h6 className="text-[20px] font-semibold">Thông tin chung</h6>
        </div>

        {/* input */}
        <div className="w-[80%] ">
          <div className="flex gap-[30px]">
            <Type />
            <Topic />
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
