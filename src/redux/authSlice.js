import { createSlice } from "@reduxjs/toolkit";
import { tokenLocalStorage } from "../api/localStorage";

const initialState = {
  token: tokenLocalStorage?.get() || null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
