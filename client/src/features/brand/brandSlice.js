import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Thunk
import {
  getBrandsThunk,
  createBrandThunk,
  editBrandThunk,
  deleteBrandThunk,
} from "./brandThunk";
// Utils
import url from "../../utils/url";
// Toastify
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  brands: null,
};

export const getBrands = createAsyncThunk("brand/get", async (thunkAPI) => {
  return getBrandsThunk(url + "/api/v1/brand", thunkAPI);
});

export const createBrand = createAsyncThunk(
  "brand/create",
  async (payload, thunkAPI) => {
    return createBrandThunk(payload, url + "/api/v1/brand", thunkAPI);
  }
);
export const EditBrands = createAsyncThunk(
  "brand/get",
  async (payload, thunkAPI) => {
    return editBrandThunk(
      payload,
      url + "/api/v1/brand" + payload.id,
      thunkAPI
    );
  }
);
export const deleteBrands = createAsyncThunk(
  "brand/get",
  async (payload, thunkAPI) => {
    return deleteBrandThunk(url + "/api/v1/brand" + payload.id, thunkAPI);
  }
);

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Get All brands
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.brands = payload.brands;
      })
      .addCase(getBrands.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload.msg);
      })
      // Create brand
      .addCase(createBrand.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBrand.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success(payload.msg);
      })
      .addCase(createBrand.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload.msg);
      });
  },
});

// export const { } = brandSlice.actions;
export default brandSlice.reducer;
