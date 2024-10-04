import React from "react";

const Add = ({ addField, ind }) => {
  return (
    <i
      className="fa fa-plus-circle text-[25px]"
      onClick={() => addField(ind)}
    ></i>
  );
};

export default Add;
