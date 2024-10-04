import React from "react";
import { useSelector } from "react-redux";

const PostButton = () => {
  const { fieldList } = useSelector((state) => state.addNewPostSlice);
  const post = () => {
    console.log(fieldList);
  };
  return (
    <div className="w-[20%] sticky top-[50px] h-[150px]">
      <button
        className=" button relative text-[18px] font-semibold bg-black text-white w-full h-[72px] mb-[16px]"
        onClick={() => post()}
      >
        Đăng bài viết
      </button>

      <p className="mt-[8px] mb-[16px] font-light text-[15px]">
        Xem{" "}
        <strong className="font-semibold">
          Preview <i className="fa fa-external-link-alt"></i>
        </strong>{" "}
        trước khi đăng bài viết.
      </p>
    </div>
  );
};

export default PostButton;
