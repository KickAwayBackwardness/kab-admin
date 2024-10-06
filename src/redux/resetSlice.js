import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reset: 1,
};

const resetSlice = createSlice({
  name: "resetSlice",
  initialState,
  reducers: {
    setReset: (state) => {
      state.reset = ++state.reset;
    },
  },
});

export const { setReset } = resetSlice.actions;

export default resetSlice.reducer;
