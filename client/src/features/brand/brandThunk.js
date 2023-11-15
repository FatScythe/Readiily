export const createBrandThunk = async (payload, url, thunkAPI) => {
  try {
    const {
      name,
      colors,
      font,
      email,
      website,
      socials,
      light,
      dark,
      industry,
      fontFile,
    } = payload;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("colors", JSON.stringify(colors));
    formData.append("font", font);
    formData.append("email", email);
    formData.append("fontFile", fontFile);
    formData.append("website", website);
    formData.append("socials", JSON.stringify(socials));
    formData.append("lightFile", light);
    formData.append("darkFile", dark);
    formData.append("industry", JSON.stringify(industry));

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

export const getBrandsThunk = async (url, thunkAPI) => {
  try {
    const response = await fetch(url);

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

export const editBrandThunk = async (payload, url, thunkAPI) => {
  try {
    const { name, email, password } = payload;
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
    return error;
  }
};

export const deleteBrandThunk = async (url, thunkAPI) => {
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
    return error;
  }
};
