import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSigningUp: false,
    isMenuOpen: false, // 메뉴 상태 추가
  },
  reducers: {
    toggleSignUp: (state) => {
      state.isSigningUp = !state.isSigningUp;
    },
    toggleMenu: (state) => {
      // 메뉴 상태 토글
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleSignUp, toggleMenu } = uiSlice.actions;

export default uiSlice.reducer;
