import React from "react";
import SmallText from "../Text/SmallText";

const BottomFooter = () => {
  return (
    <div className="w-full bg-black flex justify-between items-center sticky top-sticky_footer_bottom_position text-white h-[var(--footer-bottom-height)] px-[var(--footer-bottom-padding)]">
      <div className="flex-1"></div>
      <div className="flex-1">
        <ul className=" flex justify-center items-center">
          <li className="mx-[var(--footer-bottom-menu-margin)]">
            <SmallText text="privacy policy" />
          </li>
          <li className="mx-[var(--footer-bottom-menu-margin)]">
            <SmallText text="tearm of service" />
          </li>
          <li className="mx-[var(--footer-bottom-menu-margin)]">
            <SmallText text="legal license" />
          </li>
        </ul>
      </div>
      <div className="flex-1 text-right ">
        <SmallText text="© 2024" />
      </div>
    </div>
  );
};

export default BottomFooter;
