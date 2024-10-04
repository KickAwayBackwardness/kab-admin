import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NewsItemPhotoParallax = ({ src, alt }) => {
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
    ["10%", "-10%"]
  );

  return (
    <div
      className=" news-item-photo-container rounded-[var(--news-item-photo-rounded)]"
      ref={ref}
    >
      <motion.img src={src} alt={alt} style={{ translateY: translateY }} />
    </div>
  );
};

export default NewsItemPhotoParallax;
