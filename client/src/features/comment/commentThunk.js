export const createCommentThunk = async (payload, url, thunkAPI) => {
  try {
    const { comment, requestId, brandId, date } = payload;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        comment,
        requestId,
        brandId,
        date,
      }),
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

export const getCommentsThunk = async (url, thunkAPI) => {
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
