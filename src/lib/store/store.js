// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/lib/store/slices/userSlice";
import sidemenuReducer from "@/lib/store/slices/sidemenuSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      openMenu: sidemenuReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();