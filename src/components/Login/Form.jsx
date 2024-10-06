import React, { useState } from "react";
import SigninText from "../vendors/svg/SigninText";
import { authSer } from "../../api/service/authSer";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/authSlice";
import { tokenLocalStorage } from "../../api/localStorage";
import LoadingCircle from "../vendors/LoadingCircle";
import { closeForceLogin, closeModal } from "../../redux/modalSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const { isLoading } = useSelector((state) => state.minusLoadingSlice);

  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    // validation
    setError("");
    setDisabled(true);
    // goi api
    authSer
      .login(userLogin)
      .then(({ data }) => {
        tokenLocalStorage.set(data.content);
        dispatch(setToken(data.content));
        dispatch(closeModal());
        dispatch(closeForceLogin());
        setDisabled(false);
      })
      .catch(({ response }) => {
        setError(response.data.message);
        setDisabled(false);
      });
  };
  return (
    <form className="w-full" onSubmit={(e) => login(e)}>
      <div>
        <input
          className="input-default"
          type="text"
          name="username"
          value={userLogin.username}
          placeholder="Username"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="my-[20px]">
        <input
          className="input-default"
          type="text"
          name="password"
          value={userLogin.password}
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <button
          className={`button realtive clip-path-button bg-black text-white 
          w-full h-[50px] mb-[16px] flex items-center justify-center
          ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
          `}
          disabled={disabled}
        >
          {isLoading ? <LoadingCircle /> : <SigninText color="white" />}
        </button>
      </div>
      <div className="w-full min-h-[25px]">
        <p className="text-error">{error}</p>
      </div>
    </form>
  );
};

export default Form;
