import { createSlice } from "@reduxjs/toolkit";
import { tokenLocalStorage } from "../api/localStorage";

const initialState = {
  isLogin: false,
  isSignup: false,
  forceLogin: tokenLocalStorage?.get() ? false : true,
  typeModal: {
    isOpen: false,
    action: "ADD",
    type_id: undefined,
  },
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setIsLogin: (state) => {
      state.isLogin = true;
      state.isSignup = false;
    },
    setIsSignup: (state) => {
      state.isLogin = false;
      state.isSignup = true;
    },
    closeModal: (state) => {
      state.isLogin = false;
      state.isSignup = false;
      state.typeModal = { ...state.typeModal, isOpen: false };
    },
    closeForceLogin: (state) => {
      state.forceLogin = false;
    },
    openTypeModal: (state, action) => {
      state.typeModal = {
        isOpen: true,
        action: action.payload.action,
        type_id: action.payload.type_id,
      };
    },
  },
});

export const {
  setIsLogin,
  setIsSignup,
  closeModal,
  closeForceLogin,
  openTypeModal,
} = modalSlice.actions;

export default modalSlice.reducer;
