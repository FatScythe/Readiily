// Toastify
import { toast } from "react-toastify";

export const createRequestThunk = async (payload, url, thunkAPI) => {
  try {
    const { desc, imageFile, date, brand } = payload;
    const formData = new FormData();

    formData.append("desc", desc);
    formData.append("imageFile", imageFile);
    formData.append("brand", brand);
    formData.append("date", date);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data?.msg || "Something went wrong");
      return thunkAPI.rejectWithValue(data.msg);
    }

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getRequestsThunk = async (url, thunkAPI) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.msg);
      return thunkAPI.rejectWithValue(data.msg);
    }

    return data;
  } catch (error) {
    return error;
  }
};
