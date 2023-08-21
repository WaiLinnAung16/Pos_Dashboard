import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  name: "",
  phone_number: "",
  date_birth: "",
  gender: "",
  address: "",
  email: "",
  password: "",
  role: "",
  user_photo: "",
};

export const registerSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {
    addRegisterUser: (state, { payload }) => {
      state.name = payload.name;
      state.phone_number = payload.phone_number;
      state.date_birth = payload.date_birth;
      state.gender = payload.gender;
      state.address = payload.address;
      state.email = payload.email;
      state.password = payload.password;
      state.role = payload.role;
    },
  },
});

export const { addRegisterUser } = registerSlice.actions;
export default registerSlice.reducer;
