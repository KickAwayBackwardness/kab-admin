import React from "react";
import DeleteField from "../DeleteField";
import PhotoField from "./PhotoField";
import PhotoName from "./PhotoName";
import IsParallax from "./IsParallax";
import { useEffect, useState } from "react";
import { inputData } from "../../../../redux/addNewPostSlice";
import { useDispatch, useSelector } from "react-redux";

const Photo = ({ index }) => {
  const dispatch = useDispatch();
  const { fieldList } = useSelector((state) => state.addNewPostSlice);
  const [photo, setPhoto] = useState(fieldList[index]);
  const inputValue = (e) => {
    setPhoto({
      ...photo,
      content: {
        ...photo.content,
        [e.target.name]: e.target.value,
      },
    });
  };

  useEffect(() => {
    dispatch(
      inputData({
        index,
        data: photo,
      })
    );
  }, [photo]);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="font-bold mb-[20px] flex  items-center gap-[10px]">
          <span>Photo</span>
          <DeleteField index={index} />
        </h4>
        <div>
          <PhotoField index={index} inputValue={inputValue} />
          <PhotoName inputValue={inputValue} />
          <IsParallax setPhoto={setPhoto} photo={photo} />
        </div>
      </div>
    </div>
  );
};

export default Photo;
