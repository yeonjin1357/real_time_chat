import React from "react"; // eslint-disable-line no-unused-vars
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth, db, ref, serverTimestamp } from "../firebaseConfig";
import { update } from "firebase/database";
import { toggleMenu } from "../features/ui/uiSlice"; // toggleMenu 액션 import
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import HamburgerMenu from "./HamburgerMenu";
import Sidebar from "./Sidebar";
import classes from "./ChatRoom.module.css";

const ChatRoom = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen); // 메뉴 상태 가져오기
  const currentUser = useSelector((state) => state.user.currentUser); // 사용자 상태 가져오기

  const handleLogout = async () => {
    try {
      await update(ref(db, `/users/${currentUser.uid}`), {
        status: false,
        last_changed: serverTimestamp(),
      });
      await signOut(auth);
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
