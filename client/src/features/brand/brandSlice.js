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
  currentBrand: null,
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
  "brand/edit",
  async (payload, thunkAPI) => {
    return editBrandThunk(payload, url + "/api/v1/brand/" + payload, thunkAPI);
  }
);
export const deleteBrand = createAsyncThunk(
  "brand/delete",
  async (payload, thunkAPI) => {
    return deleteBrandThunk(url + "/api/v1/brand/" + payload, thunkAPI);
  }
);

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    selectBrand: (state, { payload }) => {
      state.currentBrand = payload;
    },
  },
  extraReducers(builder) {
    builder
      // Get All brands
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.brands = payload;
        if (payload.brands && payload.brands.length > 0) {
          state.currentBrand = {
            id: payload.brands[0]._id,
            name: payload.brands[0].name,
          };
        }
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
      }) // Delete brand
      .addCase(deleteBrand.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBrand.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success(payload.msg);
      })
      .addCase(deleteBrand.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload.msg);
      });
  },
});

export const { selectBrand } = brandSlice.actions;
export default brandSlice.reducer;
