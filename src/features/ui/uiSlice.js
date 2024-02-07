import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSigningUp: false, // 회원 로그인 상태
    isMenuOpen: false, // 햄버거 메뉴 상태
  },
  reducers: {
    toggleSignUp: (state) => {
      state.isSigningUp = !state.isSigningUp;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleSignUp, toggleMenu } = uiSlice.actions;

export default uiSlice.reducer;
