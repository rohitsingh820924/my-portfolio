// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/lib/store/slices/userSlice";
import authReducer from "@/lib/store/slices/authSlice";
import sidemenuReducer from "@/lib/store/slices/sidemenuSlice";
import blogsReducer from '@/lib/store/slices/blogSlice'; 
import tiffinReducer from '@/lib/store/slices/tiffinSlice'; 

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      auth: authReducer,
      openMenu: sidemenuReducer,
      blogs: blogsReducer,
      tiffin: tiffinReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;