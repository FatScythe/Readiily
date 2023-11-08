import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import brandSlice from "./features/brand/brandSlice";
import requestSlice from "./features/request/requestSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    brand: brandSlice,
    request: requestSlice,
  },
});
