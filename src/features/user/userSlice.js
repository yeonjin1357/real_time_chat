// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null, // 현재 사용자 정보
    isLoading: true, // 로딩 컴포넌트 여부
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload) {
        const { displayName, email, uid, profileURL, status } = action.payload;
        state.currentUser = { displayName, email, uid, profileURL, status };
      } else {
        state.currentUser = null;
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
