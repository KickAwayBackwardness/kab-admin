import React from "react";
import { useDispatch } from "react-redux";
import { addField } from "../../../redux/addNewPostSlice";

const Tool = () => {
  const dispatch = useDispatch();
  const add = (field) => {
    dispatch(addField(field));
  };
  return (
    <div
      className="sticky h-[150px] top-[50px] 
    before:absolute before:top-[-50px] before:left-0 before:w-full before:h-[50px] before:bg-admin_background  z-[2] pointer-events-none"
    >
      <div className=" flex justify-between h-fit bg-admin_background pb-[20px]">
        <div
          className="button bg-black h-fit font-bold flex items-center text-white pointer-events-auto"
          onClick={() => add("PHARAGRAPH")}
        >
          Pharagraph
        </div>
        <div
          className="button bg-black h-fit font-bold flex items-center text-white pointer-events-auto"
          onClick={() => add("PHOTO")}
        >
          Photo
        </div>
        <div
          className="button bg-black h-fit font-bold flex items-center text-white pointer-events-auto"
          onClick={() => add("BULLETLIST")}
        >
          Bullet List
        </div>
        <div
          className="button bg-black h-fit font-bold flex items-center text-white pointer-events-auto"
          onClick={() => add("NUMBERLIST")}
        >
          Number List
        </div>
        <div
          className="button bg-black h-fit font-bold flex items-center text-white pointer-events-auto"
          onClick={() => add("SIGNATURE")}
        >
          Signature
        </div>
        <div
          className="button bg-black h-fit font-bold flex items-center text-white pointer-events-auto"
          onClick={() => add("DEVIDER")}
        >
          Devider
        </div>
      </div>
    </div>
  );
};

export default Tool;
