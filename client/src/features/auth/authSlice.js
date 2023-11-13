import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Thunk
import {
  registerAccountThunk,
  loginAccountThunk,
  logoutAccountThunk,
} from "./authThunk";
// Utils
import url from "../../utils/url";
// Toastify
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  account: null,
};

export const registerAccount = createAsyncThunk(
  "auth/register",
  async (account, thunkAPI) => {
    return registerAccountThunk(
      account,
      url + "/api/v1/auth/register/password",
      thunkAPI
    );
  }
);

export const loginAccount = createAsyncThunk(
  "auth/login",
  async (account, thunkAPI) => {
    return loginAccountThunk(
      account,
      url + "/api/v1/auth/login/password",
      thunkAPI
    );
  }
);

export const logoutAccount = createAsyncThunk(
  "auth/logout",
  async (thunkAPI) => {
    return logoutAccountThunk(url + "/api/v1/auth/logout", thunkAPI);
  }
);

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
  extraReducers(builder) {
    builder
      // Register Account
      .addCase(registerAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAccount.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success(payload.msg);
      })
      .addCase(registerAccount.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload.msg || "Something went wrong");
      })
      // Login Account
      .addCase(loginAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAccount.fulfilled, (state, { payload }) => {
        state.account = payload;
        toast.success("Welcome " + state.account.name + ",");
        state.loading = false;
      })
      .addCase(loginAccount.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload.msg || "Something went wrong");
      })
      // Logout Account
      .addCase(logoutAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAccount.fulfilled, (state) => {
        state.account = null;
        toast.success("Logging out...");
        state.loading = false;
      })
      .addCase(logoutAccount.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload.msg || "Something went wrong");
      });
  },
});

export const { saveAccount, removeAccount } = authSlice.actions;
export default authSlice.reducer;
