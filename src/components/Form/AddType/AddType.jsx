import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modalSlice";
import LoadingCircle from "../../vendors/LoadingCircle";
import { useState } from "react";
import { typeSer } from "../../../api/service/typeSer";
import { setReset } from "../../../redux/resetSlice";
import ThemText from "../../vendors/svg/ThemText";

const AddType = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState({
    type_name: "",
  });

  const [errorField, setErrorField] = useState("");
  const [errorApi, setErrorApi] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { isLoading } = useSelector((state) => state.minusLoadingSlice);

  const handleChange = (e) => {
    setType({ type_name: e.target.value });
    if (!e.target.value.trim()) {
      setErrorField("Trường này không được để trống.");
      setDisabled(true);
    } else {
      setErrorField("");
      setDisabled(false);
    }
  };

  const add = (e) => {
    e.preventDefault();
    setDisabled(true);
    setErrorApi("");
    typeSer
      .add(type)
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

  return (
    <form className="w-full" onSubmit={(e) => add(e)}>
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

      <div>
        <button
          className={`button realtive clip-path-button bg-black text-white 
          w-full h-[50px] mb-[16px] flex items-center justify-center
          ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
          `}
          disabled={disabled}
        >
          {isLoading ? <LoadingCircle /> : <ThemText color="white" />}
        </button>
      </div>
      <div className="w-full min-h-[25px]">
        <p className="text-error">{errorApi}</p>
      </div>
    </form>
  );
};

export default AddType;
