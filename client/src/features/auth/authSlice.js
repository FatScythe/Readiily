import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  account: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveAccount: (state, { payload }) => {
      state.account = payload;
    },
    removeAccount: (state) => {
      state.account = null;
    },
  },
});

export const { saveAccount, removeAccount } = authSlice.actions;
export default authSlice.reducer;
