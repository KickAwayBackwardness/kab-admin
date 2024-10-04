import React, { useEffect, useState } from "react";
import DeleteField from "../DeleteField";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Text from "./Text";
import { inputData } from "../../../../redux/addNewPostSlice";
import { useDispatch, useSelector } from "react-redux";

const Pharagraph = ({ index }) => {
  const dispatch = useDispatch();
  const { fieldList } = useSelector((state) => state.addNewPostSlice);
  const [pharagraph, setPharagraph] = useState(fieldList[index]);
  const inputValue = (e) => {
    setPharagraph({
      ...pharagraph,
      content: {
        ...pharagraph.content,
        [e.target.name]: e.target.value,
      },
    });
  };

  useEffect(() => {
    dispatch(
      inputData({
        index,
        data: pharagraph,
      })
    );
  }, [pharagraph]);
  return (
    <div className="mb-[50px]">
      <h4 className="font-bold mb-[20px] flex  items-center gap-[10px]">
        <span>Pharagraph</span>
        <DeleteField index={index} />
      </h4>
      <div className="flex gap-[30px]">
        <Title
          sectionHeading={pharagraph.content.sectionHeading}
          inputValue={inputValue}
        />
        <SubTitle
          subHeading={pharagraph.content.subHeading}
          inputValue={inputValue}
        />
      </div>
      <Text text={pharagraph.content.text} inputValue={inputValue} />
    </div>
  );
};

export default Pharagraph;
