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
      return thunkAPI.rejectWithValue(data);
    }

    return data;
  } catch (error) {
    console.error(error);
    return thunkAPI.rejectWithValue({
      msg: "Something went wrong, Check internet connection",
    });
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
      return thunkAPI.rejectWithValue(data);
    }

    return data;
  } catch (error) {
    console.error(error);
    return thunkAPI.rejectWithValue({
      msg: "Something went wrong, Check internet connection",
    });
  }
};

export const logoutAccountThunk = async (url, thunkAPI) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    const data = await response.json();

    if (!response.ok) {
      return thunkAPI.rejectWithValue(data);
    }

    return data;
  } catch (error) {
    console.error(error);
    return thunkAPI.rejectWithValue({
      msg: "Something went wrong, Check internet connection",
    });
  }
};
