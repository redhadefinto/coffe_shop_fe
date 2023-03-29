import { createSlice } from '@reduxjs/toolkit'
// import { reduce } from 'lodash'

const initialState = {
  number: 0
} 

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // nama action akan digenerate otomatis
    increment: (prevState) => {
      return {
        ...prevState,
        number: prevState.number + 1,
      }
    },
    decrement: (prevState) => {
      return {
        ...prevState,
        number: prevState.number - 1,
      }
    },
    reset: (prevState) => {
      return {
        ...prevState,
        number: 0,
      }
    }
  }
})

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;