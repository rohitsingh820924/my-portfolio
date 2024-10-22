// slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: 0,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
});

export const { increment } = userSlice.actions;
export default userSlice.reducer;