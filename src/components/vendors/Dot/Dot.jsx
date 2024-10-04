import React from "react";

const Dot = ({ color }) => {
  return (
    <p
      className={`group-hover:bg-white w-[var(--dot-size)] max-w-[var(--dot-size)] aspect-square bg-${color} mr-[var(--margin-right-dot)] inline-block`}
    ></p>
  );
};

export default Dot;
