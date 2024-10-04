import React from "react";
import hackyText from "../../../utils/hacky-text";

const FooterMainText = ({ text }) => {
  const handleHover = (event, text) => {
    hackyText(event.target, text);
  };
  return (
    <span
      className="uppercase cursor-pointer text-white text-ibm leading-[var(--footer-main-text-line-height)]  w-fit text-footer_main_text hacky-text relative z-[1]
  before:content-[''] before:absolute before:w-0 before:h-[100%] before:bg-white before:top-0 before:right-0 before:-z-[1] before:transition-all before:duration-500 before:ease-in-out hover:text-black hover:before:w-[100%] hover:before:right-unset hover:before:left-0
 "
      onMouseEnter={(event) => handleHover(event, text)}
    >
      {text}
    </span>
  );
};

export default FooterMainText;
