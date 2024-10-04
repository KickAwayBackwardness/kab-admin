import React from "react";
import DeleteField from "../DeleteField";

const Devider = ({ index }) => {
  return (
    <div className="mb-[50px]">
      <h4 className="font-bold mb-[20px] flex  items-center gap-[10px]">
        <span>Devider</span>
        <DeleteField index={index} />
      </h4>
      <div className="flex gap-[30px]">
        <span className=" text-sub_menu_index text-[12px] font-light">
          Vạch phân cách sẽ được thêm theo chiều ngang của bài viết.
        </span>
      </div>
    </div>
  );
};

export default Devider;
