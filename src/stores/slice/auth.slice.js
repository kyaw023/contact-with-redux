import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  data: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    processing: (state) => {
      state.loading = true;
    },
    error: (state) => {
      state.error = action.payload;
    },
    login:(state, action) => {
      (state.loading = false),
        (state.auth = true),
        (state.data = action.payload);
      state.error = null;
    },
    register: (state, action) => {
      (state.error = null),
        (state.loading = false),
        (state.data = action.payload);
    },
    logout: (state, action) => {
      (state.loading = false), (state.auth = true), (state.error = null);
    },
  },
});

export const { error, login, processing, logout, register } = authSlice.actions;
export default authSlice.reducer;
