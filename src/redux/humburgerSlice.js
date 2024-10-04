import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const humburgerSlice = createSlice({
  name: "humburgerSlice",
  initialState,
  reducers: {
    toggleHumburger: (state) => {
      state.isOpen = !state.isOpen;

      // xu ly scroll
      state.isOpen
        ? document.querySelector("html").classList.add("scroll-prohibited")
        : document.querySelector("html").classList.remove("scroll-prohibited");
    },
  },
});

export const { toggleHumburger } = humburgerSlice.actions;

export default humburgerSlice.reducer;
