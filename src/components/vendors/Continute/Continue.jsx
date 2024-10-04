import React, { useEffect, useState } from "react";
import Background from "./Background";
import { useRef } from "react";
import TextBlock from "./TextBlock";
const Continue = () => {
  const ref = useRef(null);

  const [backgroundTop, getBackgroundTop] = useState(0);
  const [backgroundHeight, getBackgroundHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      getBackgroundTop(ref.current.offsetTop);
      getBackgroundHeight(ref.current.getBoundingClientRect().height);
    }
  });

  return (
    <section className=" get-value relative w-fit h-fit" ref={ref}>
      <div className="w-[100vw] h-fit relative">
        <Background />
      </div>

      <TextBlock
        backgroundTop={backgroundTop}
        backgroundHeight={backgroundHeight}
      />
    </section>
  );
};

export default Continue;
