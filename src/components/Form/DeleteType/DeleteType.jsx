import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/modalSlice";
import { typeSer } from "../../../api/service/typeSer";
import { setReset } from "../../../redux/resetSlice";
import { useState } from "react";

const DeleteType = ({ type_id }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  const inactive = (e) => {
    setDisabled(true);

    typeSer
      .inactive(type_id)
      .then(({ data }) => {
        dispatch(setReset());
        dispatch(closeModal());
        setDisabled(false);
      })
      .catch(({ response }) => {
        setDisabled(false);
      });
  };

  return (
    <>
      <div className="w-full text-left text-[18px]">
        Bạn nên chuyển trạng thái sang{" "}
        <b className=" font-bold text-error">Inactive</b>.
        <br />
        <span className="opacity-50 text-[16px]">
          Tính năng xoá loại bài viết không khả dụng.
        </span>
      </div>
      <div className=" w-full flex justify-end gap-[20px] mt-[50px]">
        <button
          className={`button custom ${
            disabled ? "cursor-not-allowed" : " cursor-pointer "
          }`}
          disabled={disabled}
          onClick={() => inactive()}
        >
          Inactive
        </button>
        <button
          className=" button clip-path-button bg-black text-white"
          onClick={() => dispatch(closeModal())}
        >
          Thoát
        </button>
      </div>
    </>
  );
};

export default DeleteType;
