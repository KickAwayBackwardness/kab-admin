import React from "react";
import { useSelector } from "react-redux";
import Pharagraph from "./Pharagraph/Pharagraph";
import Signature from "./Signature/Signature";
import Photo from "./Photo/Photo";
import Devider from "./Devider/Devider";
import NumberList from "./NumberList/NumberList";
import BulletList from "./BulletList/BulletList";

const FieldList = () => {
  const { fieldList } = useSelector((state) => state.addNewPostSlice);

  const renderList = () => {
    if (fieldList.length) {
      return fieldList.map((item, index) => {
        if (item.type === "PHARAGRAPH") {
          return (
            <div key={index}>
              <Pharagraph index={index} />
            </div>
          );
        }
        if (item.type === "PHOTO") {
          return (
            <div key={index}>
              <Photo index={index} />
            </div>
          );
        }

        if (item.type === "DEVIDER") {
          return (
            <div key={index}>
              <Devider index={index} />
            </div>
          );
        }

        if (item.type === "SIGNATURE") {
          return (
            <div key={index}>
              <Signature index={index} />
            </div>
          );
        }

        if (item.type === "NUMBERLIST") {
          return (
            <div key={index}>
              <NumberList index={index} />
            </div>
          );
        }
        if (item.type === "BULLETLIST") {
          return (
            <div key={index}>
              <BulletList index={index} />
            </div>
          );
        }
      });
    } else {
      return <p className="text-error">Vui lòng thêm các trường phù hợp.</p>;
    }
  };
  return <div className="relative top-[-40px]">{renderList()}</div>;
};

export default FieldList;
