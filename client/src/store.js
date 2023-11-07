import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import brandSlice from "./features/brand/brandSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    brand: brandSlice,
  },
});
