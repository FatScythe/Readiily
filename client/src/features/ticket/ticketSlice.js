import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Thunk
import {
  getTicketsThunk,
  createTicketThunk,
  replyTicketThunk,
} from "./ticketThunk";
// Utils
import url from "../../utils/url";
// Toastify
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  tickets: null,
};

export const getTickets = createAsyncThunk("ticket/get", async (thunkAPI) => {
  return getTicketsThunk(url + "/api/v1/ticket/", thunkAPI);
});

export const createTicket = createAsyncThunk(
  "ticket/create",
  async (payload, thunkAPI) => {
    return createTicketThunk(payload, url + "/api/v1/ticket", thunkAPI);
  }
);

export const replyTicket = createAsyncThunk(
  "ticket/reply",
  async (payload, thunkAPI) => {
    return replyTicketThunk(payload, url + "/api/v1/ticket", thunkAPI);
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Get Tickets
      .addCase(getTickets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTickets.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.tickets = payload;
      })
      .addCase(getTickets.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload.msg || "Something went wrong");
      })
      // Create Ticket
      .addCase(createTicket.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTicket.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success(payload.msg);
      })
      .addCase(createTicket.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload.msg || "Something went wrong");
      })
      // Reply Ticket
      .addCase(replyTicket.pending, (state) => {
        state.loading = true;
      })
      .addCase(replyTicket.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success(payload.msg);
      })
      .addCase(replyTicket.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload.msg || "Something went wrong");
      });
  },
});

// export const {} = requestSlice.actions;
export default ticketSlice.reducer;
