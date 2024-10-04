import React from "react";

const Delete = ({ deleteField, ind }) => {
  return (
    <i
      className="fa fa-minus-circle text-error text-[25px]"
      onClick={() => deleteField(ind)}
    ></i>
  );
};

export default Delete;
