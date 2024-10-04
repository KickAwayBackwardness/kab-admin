import React from "react";

const CategoryText = ({ text, isActive }) => {
  return (
    <p
      className={`text-whyteInktrap font-[500] text-category uppercase leading-[var(--category-line-height)] tracking-[var(--category-letter-spacing)]
      ${isActive ? " opacity-100" : " opacity-20"} 
      
      `}
    >
      {text}
    </p>
  );
};

export default CategoryText;
