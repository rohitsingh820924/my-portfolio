import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  isMobile: false,
};

const sidemenuSlice = createSlice({
  name: "sidemenu",
  initialState,
  reducers: {
    setOpenMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setOpenMenu, setIsMobile } = sidemenuSlice.actions;
export default sidemenuSlice.reducer;
