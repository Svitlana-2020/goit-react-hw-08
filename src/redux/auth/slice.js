import { createSlice } from "@reduxjs/toolkit";
import { ApiCreateUser, ApiLogIn, ApiLogOut, ApiRefreshUser } from "./operations";

const initialState = {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading:false,
    error: null,
  }

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => builder.addCase(ApiCreateUser.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   
   .addCase(ApiCreateUser.fulfilled, (state, {payload}) => {
    state.loading = false;
    state.isLoggedIn = true;
    state.token = payload.token;
    state.user.name = payload.name;
    state.user.email = payload.email;
})

.addCase(ApiCreateUser.rejected, (state, {payload}) => {
  state.loading = false;
  state.error = payload;
})

.addCase(ApiLogIn.pending, (state) => {
  state.loading = true;
  state.error = null;
})

.addCase(ApiLogIn.fulfilled, (state, {payload}) => {
  state.loading = false;
  state.isLoggedIn = true;
  state.token = payload.token;
    state.user.name = payload.name;
    state.user.email = payload.email;
})

.addCase(ApiLogIn.rejected, (state, {payload}) => {
  state.loading = false;
  state.error = payload;
})

.addCase(ApiRefreshUser.pending, (state) => {
  state.isRefreshing = true;
  state.error = null;
})

.addCase(ApiRefreshUser.fulfilled, (state, {payload}) => {
  state.isRefreshing = false;
  state.isLoggedIn = true;
    state.user.name = payload;
    state.user.email = payload;
})

.addCase(ApiRefreshUser.rejected, (state, {payload}) => {
  state.isRefreshing = false;
  state.error = payload;
})

.addCase(ApiLogOut.pending, (state) => {
  state.loading = true;
  state.error = null;
})

.addCase(ApiLogOut.fulfilled, () => {
return initialState;
})

.addCase(ApiLogOut.rejected, (state, {payload}) => {
  state.loading = false;
  state.error = payload;
})

});


export const authReducer = authSlice.reducer;