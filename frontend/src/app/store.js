import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import authReducer from "../features/authSlice"; // Assurez-vous que le chemin d'accès est correct

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
});
