import { configureStore } from "@reduxjs/toolkit";
import previewSlice from "./previewSlice";
import addNewPostSlice from "./addNewPostSlice";
import modalSlice from "./modalSlice";
import minusLoadingSlice from "./minusLoadingSlice";
import authSlice from "./authSlice";
import resetSlice from "./resetSlice";

export const store = configureStore({
  reducer: {
    previewSlice,
    addNewPostSlice,
    modalSlice,
    minusLoadingSlice,
    authSlice,
    resetSlice,
  },
});
