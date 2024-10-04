import React from "react";

const Text = ({ text, inputValue }) => {
  const error = "";
  return (
    <div className="mt-[20px]">
      <div>
        <label htmlFor="" className="label-text ">
          văn bản (*)
        </label>
      </div>
      <div>
        <textarea
          type="text"
          spellCheck={false}
          className="input-default pt-3"
          name="text"
          placeholder="Văn bản "
          value={text}
          onChange={(e) => inputValue(e)}
        />
      </div>
      <div className="pt-[10px]">
        {error && (
          <span className=" text-error text-[12px] font-light ml-1">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default Text;
