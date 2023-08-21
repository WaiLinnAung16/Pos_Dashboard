import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: null,
};

const token = Cookies.get("token");
if (token) {
  initialState.token = token;
}
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.token = payload.token;
      Cookies.set("token", state.token);
    },
    removeUser: (state) => {
      state.token = null;
      Cookies.remove("token");
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
