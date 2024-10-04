import React from "react";

const ContinueMasterText = ({ text }) => {
  return (
    <p className="text-whyteInktrap top-[1.2rem] text-continue_master uppercase font-[var(--continue-master-text-font-weight)] leading-[var(--continue-master-text-line-height)] tracking-[(--continue-master-text-letter-spacing)] ">
      {text}
    </p>
  );
};

export default ContinueMasterText;
