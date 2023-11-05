// Toastify
import { toast } from "react-toastify";

export const registerAccountThunk = async (account, url, thunkAPI) => {
  try {
    const { name, email, password } = account;
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data?.msg || "Something went wrong");
      return thunkAPI.rejectWithValue(data.msg);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const loginAccountThunk = async (account, url, thunkAPI) => {
  try {
    const { name, email, password } = account;
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, username: email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data?.msg || "Something went wrong");
      return thunkAPI.rejectWithValue(data.msg);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const logoutAccountThunk = async (url, thunkAPI) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

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
