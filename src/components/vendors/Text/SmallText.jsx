import React from "react";

const SmallText = ({ text }) => {
  return (
    <span className="uppercase text-small_text leading-[1.1] text-ibm inline-block">
      {text}
    </span>
  );
};

export default SmallText;
