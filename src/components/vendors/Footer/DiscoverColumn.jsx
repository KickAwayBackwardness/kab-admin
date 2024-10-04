import React from "react";
import FooterMainText from "../Text/FooterMainText";
import FooterDiscText from "../Text/FooterDiscText";
import Dot from "../Dot/Dot";

const DiscoverColumn = () => {
  return (
    <div
      className="w-footer_column_width h-full p-[var(--footer-column-padding)] 
        flex flex-col justify-between
        border-b-frame border-r-frame border-frame_color"
    >
      <div className=" flex items-center">
        <Dot color="white" />
        <FooterDiscText text="DISCOVER MORE" />
      </div>
      <div className="min-h-[var(--footer-main-text-block-min-height)] flex items-start">
        <div className="relative flex flex-col">
          <FooterMainText text="all news" color="white" />
          <FooterMainText text="about" color="white" />
          <FooterMainText text="master" color="white" />
          <FooterMainText text="catorogy" color="white" />
          <FooterMainText text="contact" color="white" />
        </div>
      </div>
    </div>
  );
};

export default DiscoverColumn;
