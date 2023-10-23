import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, payload) => {
      state.user = payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { saveUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
