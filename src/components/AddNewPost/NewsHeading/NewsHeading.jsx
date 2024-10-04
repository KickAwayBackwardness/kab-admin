import React from "react";
import Title from "./Title";
import Description from "./Description";
import FirstShow from "./FirstShow";

const NewsHeading = () => {
  return (
    <>
      <div className="flex  w-[100%] gap-[30px]">
        {/* left */}
        <div className="w-[20%]">
          <h6 className="text-[20px] font-semibold">Tiêu đề bài viết</h6>
        </div>

        {/* input */}
        <div className="w-[80%] ">
          <div className="flex gap-[30px]">
            <Title />
            <Description />
          </div>
          <FirstShow />
        </div>
      </div>
    </>
  );
};

export default NewsHeading;
