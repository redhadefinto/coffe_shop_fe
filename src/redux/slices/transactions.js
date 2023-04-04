import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createTransactions } from "../../utils/https/transactions";

// const controller = new AbortController();
// const signal = controller.signal;

const initialState = {
  data: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  err: null,
};

const createTransactionsThunk = createAsyncThunk(
  "transaction/post",
  async (datas, token, controller) => {
    try {
      const response = await createTransactions(datas, token, controller);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const transactionsSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    filter: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTransactionsThunk.pending, (prevState) => {
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
          err: null,
        };
      })
      .addCase(createTransactionsThunk.fulfilled, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          data: action.payload,
        };
      })
      .addCase(createTransactionsThunk.rejected, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isRejected: true,
          err: action.payload,
        };
      });
  },
});

export const transactionsActions = {
  ...transactionsSlice.actions,
  createTransactionsThunk,
};
export default transactionsSlice.reducer;
