// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // import { getProfile } from "../../utils/https/profile";
// import { createHistory } from "../../utils/https/history";

// const initialState = {
//   data: [],
//   isLoading: false,
//   isRejected: false,
//   isFulfilled: false,
//   err: null,
// };

// const createHistoryThunk = createAsyncThunk(
//   "history/post",
//   async ({ controller, token, body }) => {
//     try {
//       const response = await createHistory(controller, token, body);
//       return response.data;
//     } catch (err) {
//       return err;
//     }
//   }
// );

// const historySlice = createSlice({
//   name: "history",
//   initialState,
//   reducers: {
//     filter: (prevState) => {
//       return {
//         ...prevState,
//         data: [],
//       };
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createHistoryThunk.pending, (prevState) => {
//         return {
//           ...prevState,
//           isLoading: true,
//           isRejected: false,
//           isFulfilled: false,
//           err: null,
//         };
//       })
//       .addCase(createHistoryThunk.fulfilled, (prevState, action) => {
//         return {
//           ...prevState,
//           isLoading: false,
//           isFulfilled: true,
//           data: action.payload,
//         };
//       })
//       .addCase(createHistoryThunk.rejected, (prevState, action) => {
//         return {
//           ...prevState,
//           isLoading: false,
//           isRejected: true,
//           err: action.payload,
//         };
//       });
//   },
// });

// export const historyActions = {
//   ...historySlice.actions,
//   createHistoryThunk,
//   // updateProfileThunk,
// };
// export default historySlice.reducer;
