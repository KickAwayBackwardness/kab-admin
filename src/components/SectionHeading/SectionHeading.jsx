import React from "react";

const SectionHeading = ({ subHeading, heading }) => {
  return (
    <div>
      <div className="mb-[60px]">
        <p className="  font-light text-[16px] leading-[200%] mb-[16px]">
          {subHeading}
        </p>
        <h2
          className="leading-[120%] text-[45px] font-semibold"
          dangerouslySetInnerHTML={{ __html: heading }}
        ></h2>
      </div>
    </div>
  );
};

export default SectionHeading;
