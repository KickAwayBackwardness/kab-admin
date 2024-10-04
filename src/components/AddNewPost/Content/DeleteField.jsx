import React from "react";
import { useDispatch } from "react-redux";
import { removeField } from "../../../redux/addNewPostSlice";

const DeleteField = ({ index }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeField(index));
  };
  return (
    <i
      className="fa fa-minus-circle text-error cursor-pointer"
      onClick={() => handleDelete()}
    ></i>
  );
};

export default DeleteField;
