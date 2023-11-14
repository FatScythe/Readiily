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
      return thunkAPI.rejectWithValue(data);
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
      return thunkAPI.rejectWithValue(data);
    }

    return data;
  } catch (error) {
    return error;
  }
};
