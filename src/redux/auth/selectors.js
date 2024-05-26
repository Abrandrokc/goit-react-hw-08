export const selectisLoggedIn = (state) => state.auth.isLoggedIn

export const selectname = (state) => state.auth.user.name
export const selectIsRefreshing = state => state.auth.isRefreshing;