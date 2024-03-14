import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuthenticated: false,
  user: { email: "", password: "" },
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserField: (state, action) => {
      const { field, value } = action.payload;
      state.user[field] = value;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    loginUserSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { updateUserField, setError, loginUserSuccess, logoutUser } =
  authSlice.actions;

export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
