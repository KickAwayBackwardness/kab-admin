import React from "react";
import DiscoverColumn from "./DiscoverColumn";
import SocialColumn from "./SocialColumn";
import ContactColumn from "./ContactColumn";
import CodeColumn from "./CodeColumn";
import BottomFooter from "./BottomFooter";
import BackgroundFooter from "./BackgroundFooter";

const Footer = () => {
  return (
    <div className=" w-full h-footer_height relative z-[22] bg-black text-white ">
      <div className="w-full h-[var(--footer-column-height)] bg-black flex">
        <CodeColumn />
        <DiscoverColumn />
        <SocialColumn />
        <ContactColumn />
      </div>
      <BottomFooter />
      <BackgroundFooter />
    </div>
  );
};

export default Footer;
