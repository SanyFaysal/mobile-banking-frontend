import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./baseApi";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
