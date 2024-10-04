import React from "react";
import FooterDiscText from "../Text/FooterDiscText";
import Dot from "../Dot/Dot";
import FooterMainText from "../Text/FooterMainText";

const SocialColumn = () => {
  return (
    <div
      className="w-footer_column_width h-full p-[var(--footer-column-padding)] 
  flex flex-col justify-between
  border-b-frame border-r-frame border-frame_color"
    >
      <div className=" flex items-center">
        <Dot color="white" />
        <FooterDiscText text="JOIN THE CONVERSATION" />
      </div>
      <div className="min-h-[var(--footer-main-text-block-min-height)] flex items-start">
        <div className="relative flex flex-col">
          <FooterMainText text="TWITTER" color="white" />
          <FooterMainText text="dISCORD" color="white" />
        </div>
      </div>
    </div>
  );
};

export default SocialColumn;
