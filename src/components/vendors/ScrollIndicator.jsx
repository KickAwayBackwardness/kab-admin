import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed z-[9] origin-[0%] max-w-content w-full h-[var(--sub-menu-height)] top-header_top left-header_left bg-scroll_indicator pointer-events-none "
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};

export default ScrollIndicator;
