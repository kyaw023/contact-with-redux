import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "./service/Api.service";
import authSlice from "./slice/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
