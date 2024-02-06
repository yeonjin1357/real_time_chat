// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import uiReducer from "./features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
  },
});
