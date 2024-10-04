import React from "react";

const Description = () => {
  const error = "";

  return (
    <>
      <div className="flex-1">
        <div>
          <label htmlFor="" className="label-text ">
            Mô tả (*)
          </label>
        </div>
        <div>
          <input
            type="text"
            spellCheck={false}
            className="input-default"
            placeholder="Mô tả"
            name="decscription"
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
    </>
  );
};

export default Description;
