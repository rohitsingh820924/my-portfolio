// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/lib/store/slices/userSlice";
import sidemenuReducer from "@/lib/store/slices/sidemenuSlice";
import blogsReducer from '@/lib/store/slices/blogSlice'; 

export function makeStore() {
  return configureStore({
    reducer: {
      isDark: userReducer,
      openMenu: sidemenuReducer,
      blogs: blogsReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;