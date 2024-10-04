import React from "react";
import FooterDiscText from "../Text/FooterDiscText";
import Dot from "../Dot/Dot";
import FooterMainText from "../Text/FooterMainText";
import ButtonFrame from "../svg/ButtonFrame";
import DowloadIcon from "../svg/DowloadIcon";

const ContactColumn = () => {
  return (
    <div
      className="w-footer_column_width h-full p-[var(--footer-column-padding)] 
        flex flex-col justify-between
        border-b-frame border-r-frame border-frame_color border-r-transparent"
    >
      <div className=" flex items-center">
        <Dot color="white" />
        <FooterDiscText text="MORE DETAILS" />
      </div>
      <div className="min-h-[var(--footer-main-text-block-min-height)] flex items-start">
        <div className="relative flex flex-col justify-between h-full">
          <div className="mb-3">
            <p className="uppercase cursor-pointer text-white text-ibm  w-fit text-footer_main_text opacity-[var(--footer-text-gray-opacity)]">
              Contact us at
            </p>
            <FooterMainText text="contact@Kab.COM" color="white" />
          </div>
          <div className="group relative cursor-pointer">
            <ButtonFrame stroke="white" />
            <div
              className=" group-hover:text-black font-normal 
                absolute w-full h-full top-0 left-0 flex items-center justify-center gap-4"
            >
              <div className="w-[var(--small-icon-font-size)] h-[var(--small-icon-font-size)]">
                <DowloadIcon />
              </div>
              <span className="uppercase text-footer_disc_text font-normal leading-[1.1] text-ibm inline-block">
                DOWNLOAD BRAND BOOK
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactColumn;
