import React, { useEffect, useState } from "react";
import DeleteField from "../DeleteField";
import Text from "./Text";
import { inputData } from "../../../../redux/addNewPostSlice";
import { useDispatch, useSelector } from "react-redux";

const BulletList = ({ index }) => {
  const dispatch = useDispatch();
  const { fieldList } = useSelector((state) => state.addNewPostSlice);
  const [list, setList] = useState(fieldList[index]);
  const [error, setError] = useState("");

  const inputValue = (e, index) => {
    const updateContent = [...list.content];
    updateContent.splice(index, 1, e.target.value);
    setList({
      ...list,
      content: updateContent,
    });
  };

  useEffect(() => {
    dispatch(
      inputData({
        index,
        data: list,
      })
    );
  }, [list]);

  const renderTextField = () => {
    return list.content.map((li, ind) => {
      return (
        <div key={ind}>
          {/* <Text deleteField={deleteField} addField={addField} ind={ind} /> */}
          <Text
            ind={ind}
            text={li}
            deleteField={deleteField}
            addField={addField}
            inputValue={inputValue}
          />
        </div>
      );
    });
  };

  const deleteField = (ind) => {
    if (list.content.length <= 2) {
      setError("Danh sách phải có ít nhất 2 danh mục.");
      return;
    }

    // remove
    const updateContent = [...list.content];
    updateContent.splice(ind, 1);
    setList({
      ...list,
      content: updateContent,
    });
  };

  const addField = (ind) => {
    // reset error
    setError("");

    // add
    const updateContent = [...list.content];
    updateContent.splice(ind + 1, 0, "");
    setList({
      ...list,
      content: updateContent,
    });
  };

  return (
    <div className="mb-[50px]">
      <h4 className="font-bold mb-[20px] flex  items-center gap-[10px]">
        <span>Bullet List</span>
        <DeleteField index={index} />
      </h4>
      <div className="mt-[20px]">
        <div>
          <label htmlFor="" className="label-text ">
            văn bản (*)
          </label>
        </div>
        {renderTextField()}
        <div className="pt-[10px]">
          {error && (
            <span className=" text-error text-[12px] font-light ml-1">
              {error}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BulletList;
