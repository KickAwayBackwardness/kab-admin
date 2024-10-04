import { useEffect, useState, useRef } from "react";
import Twitter from "../svg/Twitter";
import Discord from "../svg/Discord";
import Dot from "../Dot/Dot";
import SmallText from "../Text/SmallText";
import ContinueMasterText from "../Text/ContinueMasterText";

const TextBlock = ({ backgroundHeight, backgroundTop }) => {
  const refContent = useRef(null);
  const [contentTop, setContentTop] = useState(0);
  useEffect(() => {
    if (refContent.current) {
      setContentTop(refContent.current.offsetTop);
    }
  }, []);

  const continue_text_block_top = backgroundTop - contentTop;

  return (
    <>
      <div
        className=" max-w-content left-content_left w-full h-content fixed top-content_top overflow-scroll z-[11] pointer-events-none"
        ref={refContent}
      >
        <div
          className={`countinue-fake-scroll w-full relative  `}
          style={{ height: backgroundHeight + "px" }}
        >
          <div
            className={` absolute w-full h-full left-0`}
            style={{ top: continue_text_block_top + "px" }}
          >
            <div className="h-[var(--continue-block-height)] max-w-content w-full  border-b-frame border-frame_color "></div>
            <div className="h-[var(--continue-block-height)] w-full flex ">
              <div className=" w-continue_text_block_left_width h-full border-r-frame border-frame_color ">
                <div className="p-[var(--continue-padding)] text-white">
                  <div className="flex justify-start">
                    <div className=" inline-block">
                      <Dot color="white" />
                      <span className="pr-[var(--countinue-small-text-paddind-right)]">
                        <SmallText text="to be continued" />
                      </span>
                    </div>
                    <div className=" inline-block">
                      <ContinueMasterText text="the gioi cua kab" />
                    </div>
                  </div>
                  <div className=" inline-block">
                    <ContinueMasterText text="lien tuc phat trien" />
                  </div>
                </div>
              </div>
              <div className=" w-continue_text_block_right_width h-full  z-[5]">
                {/* top */}
                <div className="h-[var(--continue-social-height)] w-full border-b-frame border-frame_color flex items-center justify-between">
                  <div
                    className="flex-1 h-full border-r-frame border-frame_color flex items-center 
                  "
                  >
                    <Twitter />
                  </div>
                  <div className="flex-1 h-full flex items-center">
                    <Discord />
                  </div>
                </div>
                {/* bottom */}
                <div className=" h-continue_disc_height w-full p-[var(--continue-padding)] flex items-end whitespace-pre-line text-white">
                  <div>
                    <span className=" block text-whyteInktrap font-light text-continue_disc leading-[var(--continue-disc-text-line-height)] tracking-[var(--continue-disc-text-letter-spacing)]">
                      Cuoc song ban dang co hay cuoc song ban mong muon. r R KAB
                    </span>
                    <span className=" mt-5 block text-whyteInktrap font-light text-continue_disc leading-[var(--continue-disc-text-line-height)] tracking-[var(--continue-disc-text-letter-spacing)]">
                      Su khac biet u? Nam o nhung quyet dinh ban chon va nhung
                      co hoi ban nam bat.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className=" absolute w-[300px] h-[300px]  left-[87px]  top-[2800px] z-[5] "
        onMouseEnter={() => console.log("hover ne")}
      ></div> */}
    </>
  );
};

export default TextBlock;
