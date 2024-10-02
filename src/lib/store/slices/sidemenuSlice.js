// slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: false,
};

const sidemenuSlice = createSlice({
  name: "openMenu",
  initialState,
  reducers: {
    setOpenMenu: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOpenMenu } = sidemenuSlice.actions;
export default sidemenuSlice.reducer;