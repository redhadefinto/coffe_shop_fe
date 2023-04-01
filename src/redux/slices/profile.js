import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getProfile } from "../../utils/https/profile";

const initialState = {
  data: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  err: null,
};

const getProfileThunk = createAsyncThunk(
  "profile/get",
  async ({controller, token}) => {
    try {
      // console.log(token)
      // console.log(controller)
      const response = await getProfile(controller, token);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);
// const updateProfileThunk = createAsyncThunk(
//   "profile/update",
//   async ({datas, fileValue, token, controller}) => {
//     // console.log(datas)
//     // console.log(fileValue)
//     try {
//       const response = await patchProfile(datas, fileValue, token, controller);
//       console.log(response)
//       return response.data;
//     } catch (err) {
//       return err;
//     }
//   }
// );

const profileSlice = createSlice({
  name: "profile",
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
      .addCase(getProfileThunk.pending, (prevState) => {
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
          err: null,
        };
      })
      .addCase(getProfileThunk.fulfilled, (prevState, action) => {
        // console.log(action)
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          data: action.payload,
        };
      })
      .addCase(getProfileThunk.rejected, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isRejected: true,
          err: action.payload,
        };
      })
      // .addCase(updateProfileThunk.pending, (prevState) => {
      //   return {
      //     ...prevState,
      //     isLoading: true,
      //     isRejected: false,
      //     isFulfilled: false,
      //     err: null,
      //   };
      // })
      // .addCase(updateProfileThunk.fulfilled, (prevState, action) => {
      //   console.log(action)
      //   return {
      //     ...prevState,
      //     isLoading: false,
      //     isFulfilled: true,
      //     data: action.payload,
      //   };
      // })
      // .addCase(updateProfileThunk.rejected, (prevState, action) => {
      //   return {
      //     ...prevState,
      //     isLoading: false,
      //     isRejected: true,
      //     err: action.payload,
      //   };
      // });
  },
});

export const profileAction = {
  ...profileSlice.actions,
  getProfileThunk,
  // updateProfileThunk,
};
export default profileSlice.reducer;
