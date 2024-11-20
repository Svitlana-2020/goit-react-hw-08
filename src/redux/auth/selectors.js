export const selectUserData = state => state.auth.userData;
export const selectisLoggedIn = state => state.auth.isLoggedIn;
export const selectisRefreshing = state => state.auth.isRefreshing;
export const selectisLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;