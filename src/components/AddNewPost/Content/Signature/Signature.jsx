import React from "react";
import DeleteField from "../DeleteField";
import { useEffect, useState } from "react";
import { inputData } from "../../../../redux/addNewPostSlice";
import { useDispatch, useSelector } from "react-redux";

const Signature = ({ index }) => {
  const dispatch = useDispatch();
  const { fieldList } = useSelector((state) => state.addNewPostSlice);
  const [signature, setSignature] = useState(fieldList[index]);
  const inputValue = (e) => {
    setSignature({
      ...signature,
      content: {
        ...signature.content,
        [e.target.name]: e.target.value,
      },
    });
  };

  useEffect(() => {
    dispatch(
      inputData({
        index,
        data: signature,
      })
    );
  }, [signature]);

  const error = "Trường này là bắt buôc.";

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="font-bold mb-[20px] flex  items-center gap-[10px]">
          <span>Signature</span>
          <DeleteField index={index} />
        </h4>
        <div className="flex gap-[30px]">
          <div className="flex-1">
            <div>
              <label htmlFor="" className="label-text ">
                Chữ ký bài viết/ nguồn (*)
              </label>
            </div>
            <div>
              <input
                type="text"
                spellCheck={false}
                name="text"
                className="input-default"
                placeholder="Nhập chữ ký hoặc nguồn."
                value={signature.content.text}
                onChange={(e) => inputValue(e)}
              />
            </div>
            {error && (
              <div className="pt-[10px]">
                <span className=" text-error text-[12px] font-light">
                  {error}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signature;
