import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  middleware: (defaultMiddleware) => {
    return defaultMiddleware({
      thunk: false,
    })
  }
})

export default store