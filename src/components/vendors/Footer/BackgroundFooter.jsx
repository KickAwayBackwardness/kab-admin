import React from "react";

const BackgroundFooter = () => {
  return (
    <div className="absolute w-full h-full bottom-0 left-0 z-[-1] p-[var(--footer-bottom-padding)]">
      <div className="pb-[var(--footer-bottom-height)] w-full h-full">
        <div className="bg-[url(/img/KAB.svg)] bg-footer_master_bg bg-fixed bg-no-repeat bg-[length:100%_auto] w-full h-full"></div>
      </div>
    </div>
  );
};

export default BackgroundFooter;
