import React from "react"; // eslint-disable-line no-unused-vars
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../features/ui/uiSlice"; // toggleMenu 액션 import
import { auth, db, ref, serverTimestamp } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { update } from "firebase/database";

import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import HamburgerMenu from "./HamburgerMenu";
import Sidebar from "./Sidebar";
import classes from "./ChatRoom.module.css";

const ChatRoom = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen); // 메뉴 열림 상태 관리
  const currentUser = useSelector((state) => state.user.currentUser); // 현재 로그인한 사용자 정보

  // 로그아웃 처리 함수
  const handleLogout = async () => {
    try {
      // 사용자 상태를 오프라인으로 업데이트 후 로그아웃 실행
      await update(ref(db, `/users/${currentUser.uid}`), {
        status: false,
        last_changed: serverTimestamp(),
      });
      await signOut(auth); // Firebase Auth 로그아웃
      console.log("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className={classes.chat_room}>
      <HamburgerMenu onToggleMenu={() => dispatch(toggleMenu())} isOpen={isMenuOpen} />
      <Sidebar isOpen={isMenuOpen} onLogout={handleLogout} />
      <div className={classes.message}>
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatRoom;
