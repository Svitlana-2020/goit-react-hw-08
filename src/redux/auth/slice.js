import { createSlice } from "@reduxjs/toolkit";

const Initial_state = {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  }

const authSlice = createSlice({
  name: "auth",
  Initial_state,
  reducers: {
  },
});

// Експортуємо редюсер слайсу
export const authReducer = authSlice.reducer;