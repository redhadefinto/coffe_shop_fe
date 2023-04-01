import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { patchProfile } from "../../utils/https/profile";

const initialState = {
  data: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  err: null,
};

const updateProfileThunk = createAsyncThunk(
  "profile/update",
  async (file, datas, token, controller ) => {
    try {
      const response = await patchProfile(file, datas, token, controller);
      console.log(response);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const profileUpdateSlice = createSlice({
  name: "profileUpdate",
  initialState,
  reducers: {
    filter: (prevState) => {
      return {
        ...prevState,
        data: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfileThunk.pending, (prevState) => {
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
          err: null,
        };
      })
      .addCase(updateProfileThunk.fulfilled, (prevState, action) => {
        console.log(action);
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          data: action.payload,
        };
      })
      .addCase(updateProfileThunk.rejected, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isRejected: true,
          err: action.payload,
        };
      })
  },
});

export const profileUpdateAction = {
  ...profileUpdateSlice.actions,
  updateProfileThunk,
};
export default profileUpdateSlice.reducer;
