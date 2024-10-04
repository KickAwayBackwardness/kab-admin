import { configureStore } from "@reduxjs/toolkit";
import humburgerSlice from "./humburgerSlice";
import previewSlice from "./previewSlice";
import addNewPostSlice from "./addNewPostSlice";

export const store = configureStore({
  reducer: {
    humburgerSlice,
    previewSlice,
    addNewPostSlice,
  },
});
