// slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: false,
};

const userSlice = createSlice({
  name: "isDark",
  initialState,
  reducers: {
    setDarkMode: (state,action) => {
      state.value=action.payload;
    },
  },
});

export const { setDarkMode } = userSlice.actions;
export default userSlice.reducer;