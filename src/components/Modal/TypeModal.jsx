import React from "react";
import Overlay from "../Overlay/Overlay";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../../redux/modalSlice";
import CloseLoginSignupButton from "../vendors/CloseLoginSignupButton";
import ThemMoiText from "../vendors/svg/ThemMoiText";
import XoaText from "../vendors/svg/XoaText";
import ChinhSuaText from "../vendors/svg/ChinhSuaText";
import DeleteType from "../Form/DeleteType/DeleteType";
import EditType from "../Form/EditType/EditType";
import AddType from "../Form/AddType/AddType";

const TypeModal = () => {
  const { typeModal } = useSelector((state) => state.modalSlice);

  if (!typeModal.isOpen) {
    return null;
  }

  const renderForm = () => {
    switch (typeModal.action) {
      case "EDIT":
        return (
          <>
            <ChinhSuaText />
            <EditType type_id={typeModal.type_id} />
          </>
        );
      case "DELETE":
        return (
          <>
            <XoaText />
            <DeleteType type_id={typeModal.type_id} />
          </>
        );
      default:
        return (
          <>
            <ThemMoiText />
            <AddType />
          </>
        );
    }
  };

  return (
    <section className=" fixed top-0 left-0 z-[10] w-[100vw] h-[100vh] flex items-center justify-center">
      <Overlay />
      <div className="clip-path-modal  max-w-[550px] py-[35px] px-[70px] w-[535px] rounded-[20px] bg-white h-fit relative z-[5]">
        <div className=" flex flex-col justify-center items-center">
          {renderForm()}
        </div>
        <CloseLoginSignupButton />
      </div>
    </section>
  );
};

export default TypeModal;
