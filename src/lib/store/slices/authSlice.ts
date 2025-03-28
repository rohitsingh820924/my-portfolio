import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie"; // Import Cookies

const cookies = new Cookies(); // Create a cookie instance

interface AuthState {
  id: string | null;
  isAuth: boolean;
}

// Read `user_id` from cookies
const userId = cookies.get("user_id") || '67dd7c4d9a05650f5af5f6a6';

const initialState: AuthState = {
  id: userId,
  isAuth: Boolean(userId),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: string }>) => {
      state.id = action.payload.id;
      state.isAuth = Boolean(action.payload.id);
      cookies.set("user_id", action.payload.id, { path: "/", expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) }); // Set cookie for 7 days
    },
    logout: (state) => {
      state.id = null;
      state.isAuth = false;
      cookies.remove("user_id"); // Remove the cookie
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
