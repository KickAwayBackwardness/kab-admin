import { createSlice } from "@reduxjs/toolkit";
import SampleNewPost from "../utils/SampleNewPost";

const initialState = {
  isPreview: false,
  content: SampleNewPost(),
};

const previewSlice = createSlice({
  name: "previewSlice",
  initialState,
  reducers: {
    togglePreview: (state) => {
      state.isPreview = !state.isPreview;
      // xu ly giao dien responsive tuong thich voi client UI
      if (state.isPreview) {
        document.querySelector("html").classList.remove("admin");
      } else {
        document.querySelector("html").classList.add("admin");
      }
    },
    setContent: (state, actions) => {
      state.content = actions.payload;
    },
  },
});

export const { togglePreview, setContent } = previewSlice.actions;

export default previewSlice.reducer;
