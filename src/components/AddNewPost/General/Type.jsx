import React from "react";
import { useEffect, useState } from "react";

const Type = () => {
  const [isShow, setIsShow] = useState(false);
  const [types, setTypes] = useState(null);
  const [selectedType, setSelectedType] = useState(1);
  useEffect(() => {
    setTypes([
      { type_id: 1, type: "Tin tức" },
      { type_id: 2, type: "Đánh giá" },
      { type_id: 3, type: "Cập nhật" },
    ]);
  }, []);
  const renderType = () => {
    return types?.map((type, index) => {
      return (
        <p
          className={`px-[15px] py-[6px] ${
            type?.type_id === selectedType ? "bg-light_gray_2" : "bg-white"
          } hover:bg-light_gray_2 transition-default cursor-pointer`}
          key={index}
          type_id={type?.type_id}
          onClick={() => setSelectedType(type.type_id)}
        >
          {type?.type}
        </p>
      );
    });
  };
  return (
    <>
      <div className="flex-1">
        <div>
          <label htmlFor="" className="label-text ">
            Loại bài viết (*)
          </label>
        </div>
        <div>
          <div
            className="w-full bg-white h-[48px] flex items-center input-default relative cursor-pointer"
            onClick={() => setIsShow(!isShow)}
          >
            {types?.length && (
              <p>
                {types?.find((type) => type?.type_id === selectedType) &&
                  types?.find((type) => type?.type_id === selectedType).type}
              </p>
            )}
            <div className=" absolute right-[16px]">
              {isShow ? (
                <i className="fa fa-chevron-up text-sub_menu_index"></i>
              ) : (
                <i className="fa fa-chevron-down text-sub_menu_index"></i>
              )}
            </div>
            {isShow && (
              <div className=" absolute z-10 w-full top-[49px] left-0 bg-white border-t-0 border-[1px] border-gray">
                {types?.length && renderType()}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Type;
