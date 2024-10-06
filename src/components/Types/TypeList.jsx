import React, { useEffect, useState } from "react";
import TypeItem from "./TypeItem";
import { typeSer } from "../../api/service/typeSer";
import { useSelector } from "react-redux";

const TypeList = () => {
  const [types, getTypes] = useState(null);
  const { reset } = useSelector((state) => state.resetSlice);
  useEffect(() => {
    typeSer
      .getAll()
      .then(({ data }) => {
        getTypes(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reset]);

  const renderType = () => {
    if (!types?.length) {
      return (
        <tr className="dot-line-buttom">
          <td colSpan={5} className="text-center p-padding_tbody text-tbody">
            Danh sách loại bài viết trống.
          </td>
        </tr>
      );
    }

    return types?.map((type, index) => {
      return <TypeItem key={index} index={index} type={type} />;
    });
  };
  return (
    <table className="w-full text-left mb-[80px]">
      <thead>
        <tr className="capitalize dot-line-buttom">
          <th className="w-[20%] p-padding_thead">Thứ tự</th>
          <th className="w-[20%] p-padding_thead">Loại bài viết</th>
          <th className="w-[20%] p-padding_thead">Số bài viết</th>
          <th className="w-[20%] p-padding_thead">trạng thái</th>
          <th className="w-[20%] p-padding_thead"></th>
        </tr>
      </thead>
      <tbody>{renderType()}</tbody>
    </table>
  );
};

export default TypeList;
