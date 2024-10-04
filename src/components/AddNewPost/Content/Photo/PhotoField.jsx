import React from "react";
import { useEffect, useState } from "react";

const PhotoField = ({ index }) => {
  const [preview, setPreview] = useState(false);
  useEffect(() => {
    //khi thay doi du lieu thi prview photo van giu nguyen
    if (preview) {
      let reader = new FileReader();
      reader.readAsDataURL(preview);
      reader.onload = function (oFREvent) {
        document.getElementById(`showPrevie-${index}`).src =
          oFREvent.target.result;
      };
    }
  }, []);
  const PreviewPicture = () => {
    return (
      <div className="group relative w-full h-auto top-0 left-0 z-[1] rounded-[5px] overflow-hidden   ">
        <img
          id={`showPrevie-${index}`}
          alt="preview photo"
          className="w-full h-full object-cover  "
        />
        <div className=" absolute w-full h-full top-0 left-0 bg-overlay_avatar_hover opacity-0 group-hover:opacity-100 transition-default z-[3] "></div>
        <button
          className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-black text-white opacity-0 group-hover:opacity-100 transition-default z-[4] h-[40px] flex gap-[8px] items-center justify-center px-[20px] rounded-[8px] hover:bg-red-600"
          onClick={() => {
            setPreview(false);
          }}
        >
          <i className="fa fa-trash-alt"></i>
          <p>Remove</p>
        </button>
      </div>
    );
  };

  const handlePreview = (e) => {
    // code chay khi chua select input lan nao
    let files = e.target.files;
    let f = files[0];

    // show preview
    let reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = function (oFREvent) {
      document.getElementById(`showPrevie-${index}`).src =
        oFREvent.target.result;
    };
    setPreview(files[0]);
  };

  const SelectPicture = () => {
    return (
      <div className="relative">
        <label
          htmlFor={`photo-${index}`}
          className=" flex flex-col justify-between items-center py-2 w-[198px] h-[198px] rounded-[5px] bg-white  transition-default cursor-pointer border-[1px] border-gray hover:border-black"
        >
          <span className=" font-light flex flex-col justify-center items-center">
            <span className="link-text block text-center">Browse</span>
            to choose your file.
          </span>

          <span className="block text-center">
            <i className="fa fa-cloud-upload-alt text-[25px]"></i>
          </span>

          <span className="block font-semibold text-center">
            <span className="block">Recommended size: </span>
            <span className="block">1440px x 745px.</span>
            <span className="block">40KB min.</span>
          </span>
        </label>
        <input
          type="file"
          accept="image/*"
          className="input-default hidden"
          name={`photo-${index}`}
          id={`photo-${index}`}
          onChange={handlePreview}
        />
      </div>
    );
  };
  const error = "";
  return (
    <div className="flex gap-[30px]">
      <div className="flex-1">
        <div>
          <label className="label-text ">Thêm hình ảnh (*)</label>
        </div>
        {!preview && <SelectPicture />}
        {preview && <PreviewPicture />}
        {error && (
          <div className="pt-[10px]">
            <span className=" text-error text-[12px] font-light ml-1">
              {error}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoField;
