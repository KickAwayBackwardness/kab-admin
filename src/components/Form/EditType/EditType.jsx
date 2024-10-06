import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modalSlice";
import SigninText from "../../vendors/svg/SigninText";
import LoadingCircle from "../../vendors/LoadingCircle";
import { useState } from "react";
import CapNhatText from "../../vendors/svg/CapNhatText";
import { typeSer } from "../../../api/service/typeSer";
import { setReset } from "../../../redux/resetSlice";

const EditType = ({ type_id }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState({
    type_name: "",
    isActive: true,
  });

  const [errorField, setErrorField] = useState("");
  const [errorApi, setErrorApi] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { isLoading } = useSelector((state) => state.minusLoadingSlice);

  const handleChange = (e) => {
    setType({ ...type, [e.target.name]: e.target.value });
    if (!e.target.value.trim()) {
      setErrorField("Trường này không được để trống.");
      setDisabled(true);
    } else {
      setErrorField("");
      setDisabled(false);
    }
  };

  const update = (e) => {
    e.preventDefault();
    setDisabled(true);
    setErrorApi("");
    typeSer
      .update(type_id, type)
      .then(({ data }) => {
        dispatch(setReset());
        dispatch(closeModal());
        setDisabled(false);
      })
      .catch(({ response }) => {
        setErrorApi(response?.data.message);
        setDisabled(false);
      });
  };

  useEffect(() => {
    typeSer
      .getOneType(type_id)
      .then(({ data }) => {
        setType({
          type_name: data.content.type_name,
          isActive: data.content.isActive,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <form className="w-full" onSubmit={(e) => update(e)}>
      <div className="mb-[30px]">
        <div>
          <label htmlFor="" className="label-text mb-0">
            Loại bài viết
          </label>
        </div>
        <div>
          <input
            className="input-default"
            type="text"
            spellCheck={false}
            name="type_name"
            placeholder="Loại bài viết"
            value={type?.type_name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {errorField && (
          <div className="pt-[10px]">
            <span className=" text-error text-[12px] font-light ml-1">
              {errorField}
            </span>
          </div>
        )}
      </div>

      {/* chekc box */}
      <div className="mt-[20px] mb-[50px]">
        <div>
          <label htmlFor="" className="label-text mb-[20px]">
            trạng thái
          </label>
        </div>
        <div
          className="pl-[25px] relative flex items-center w-fit cursor-pointer"
          onClick={() => {
            setType({ ...type, isActive: !type.isActive });
          }}
        >
          <div className="absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 ">
            {type.isActive && (
              <div className="absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "></div>
            )}
          </div>
          <p className=" font-light">Active</p>
        </div>
      </div>
      <div>
        <button
          className={`button realtive clip-path-button bg-black text-white 
          w-full h-[50px] mb-[16px] flex items-center justify-center
          ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
          `}
          disabled={disabled}
        >
          {isLoading ? <LoadingCircle /> : <CapNhatText color="white" />}
        </button>
      </div>
      <div className="w-full min-h-[25px]">
        <p className="text-error">{errorApi}</p>
      </div>
    </form>
  );
};

export default EditType;
