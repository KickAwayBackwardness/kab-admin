import React from "react";
import Tool from "./Tool";
import FieldList from "./FieldList";

const Content = () => {
  return (
    <>
      <div className="flex w-[100%] gap-[30px]">
        {/* left */}
        <div className="w-[20%]">
          <h6 className="text-[20px] font-semibold">Nội dung chi tiết</h6>
        </div>

        {/* input */}
        <div className="w-[80%] ">
          <Tool />
          {/* EDITOR */}
          <FieldList />
        </div>
      </div>
    </>
  );
};

export default Content;
