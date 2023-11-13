// Toastify
import { toast } from "react-toastify";

export const createTicketThunk = async (payload, url, thunkAPI) => {
  try {
    const { subject, message, files, brandId } = payload;
    const formData = new FormData();

    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("brand", brandId);
    for (let i = 0; i < files.length; i++) {
      formData.append("attachments", files[i]);
    }

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      return thunkAPI.rejectWithValue(data);
    }

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getTicketsThunk = async (url, thunkAPI) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      return thunkAPI.rejectWithValue(data);
    }

    return data;
  } catch (error) {
    return error;
  }
};
export const replyTicketThunk = async (payload, url, thunkAPI) => {
  try {
    const { reply } = payload;
    if (!reply) {
      toast.info("Please provide a reply");
      return;
    }

    const response = await fetch(url, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return thunkAPI.rejectWithValue(data);
    }

    return data;
  } catch (error) {
    return error;
  }
};
