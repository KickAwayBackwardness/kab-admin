import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ExploreItemPhotoParallax = ({ img, alt }) => {
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
    ["7%", "-7%"]
  );

  return (
    <div className="image-container-spec-news-explore-item relative" ref={ref}>
      <motion.img src={img} alt={alt} style={{ translateY: translateY }} />
    </div>
  );
};

export default ExploreItemPhotoParallax;
