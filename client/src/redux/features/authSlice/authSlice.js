import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: typeof window !== "undefined" ? localStorage.getItem("token") || null : null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SetToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

export const { SetToken } = AuthSlice.actions;
export default AuthSlice.reducer;
