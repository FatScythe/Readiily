import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Thunk
import { getCommentsThunk, createCommentThunk } from "./commentThunk";
// Utils
import url from "../../utils/url";
// Toastify
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  comments: null,
};

export const getComments = createAsyncThunk(
  "comment/get",
  async (payload, thunkAPI) => {
    return getCommentsThunk(url + "/api/v1/comment/" + payload, thunkAPI);
  }
);

export const createComment = createAsyncThunk(
  "comment/create",
  async (payload, thunkAPI) => {
    return createCommentThunk(payload, url + "/api/v1/comment", thunkAPI);
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Get Brand Comments
      .addCase(getComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComments.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.comments = payload;
      })
      .addCase(getComments.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(
          payload?.msg || "Something went wrong, Check internet connection"
        );
      })
      // Create Comment
      .addCase(createComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createComment.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success(payload.msg);
      })
      .addCase(createComment.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(
          payload?.msg || "Something went wrong, Check internet connection"
        );
      });
  },
});

// export const {} = requestSlice.actions;
export default commentSlice.reducer;
