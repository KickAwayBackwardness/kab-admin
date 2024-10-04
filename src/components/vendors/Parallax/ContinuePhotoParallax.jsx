import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ContinuePhotoParallax = ({ img, alt }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    ["15%", "-15%"]
  );

  return (
    <div className="continue-image-container relative z-[2]" ref={ref}>
      <motion.img src={img} alt={alt} style={{ translateY: translateY }} />
    </div>
  );
};

export default ContinuePhotoParallax;
