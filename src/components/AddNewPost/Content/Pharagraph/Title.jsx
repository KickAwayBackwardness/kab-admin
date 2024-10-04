import React from "react";

const Title = ({ sectionHeading, inputValue }) => {
  const error = "";

  return (
    <div className="flex-1">
      <div>
        <label htmlFor="" className="label-text ">
          tiêu đề chính
        </label>
      </div>
      <div>
        <input
          type="text"
          spellCheck={false}
          name="sectionHeading"
          className="input-default"
          placeholder="Tiêu đề chính"
          value={sectionHeading}
          onChange={(e) => inputValue(e)}
        />
      </div>
      {error && (
        <div className="pt-[10px]">
          <span className=" text-error text-[12px] font-light ml-1">
            {error}
          </span>
        </div>
      )}
    </div>
  );
};

export default Title;
