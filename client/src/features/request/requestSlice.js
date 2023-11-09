import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Thunk
import { getRequestsThunk, createRequestThunk } from "./requestThunk";
// Utils
import url from "../../utils/url";
// Toastify
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  requests: null,
};

export const getRequests = createAsyncThunk(
  "request/get",
  async (payload, thunkAPI) => {
    return getRequestsThunk(url + "/api/v1/request/" + payload, thunkAPI);
  }
);

export const createRequest = createAsyncThunk(
  "request/create",
  async (payload, thunkAPI) => {
    return createRequestThunk(payload, url + "/api/v1/request", thunkAPI);
  }
);

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Get Brand Request
      .addCase(getRequests.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRequests.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.requests = payload;
      })
      .addCase(getRequests.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload.msg);
      })
      // Create Request
      .addCase(createRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(createRequest.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success(payload.msg);
      })
      .addCase(createRequest.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload.msg);
      });
  },
});

// export const {} = requestSlice.actions;
export default requestSlice.reducer;
