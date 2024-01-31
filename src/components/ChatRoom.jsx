import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { set } from "firebase/database";
import { auth, db, ref, serverTimestamp } from "../firebaseConfig"; // 필요한 Firebase 함수들을 import
import { signOut } from "firebase/auth";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import HamburgerMenu from "./HamburgerMenu";

import Sidebar from "./Sidebar";
import classes from "./ChatRoom.module.css";
import PropTypes from "prop-types";

const ChatRoom = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    const user = auth.currentUser; // 현재 로그인한 사용자 정보 가져오기

    if (user) {
      // 사용자 상태를 'offline'으로 설정하는 경로
      const userStatusDatabaseRef = ref(db, `/status/${user.uid}`);

      // 사용자 상태를 'offline'으로 업데이트하고 로그아웃 실행
      set(userStatusDatabaseRef, {
        state: "offline",
        last_changed: serverTimestamp(),
      })
        .then(() => {
          signOut(auth) // Firebase에서 로그아웃 실행
            .then(() => {
              console.log("Logged out successfully!");
              // 여기에 로그아웃 후 실행할 추가적인 로직을 넣을 수 있습니다.
            })
            .catch((error) => {
              console.error("Logout failed", error);
            });
        })
        .catch((error) => {
          console.error("Failed to set offline status", error);
        });
    }
  };

  return (
    <div className={classes.chat_room}>
      <HamburgerMenu onToggleMenu={toggleMenu} isOpen={isMenuOpen}></HamburgerMenu>
      <Sidebar user={user} onLogout={handleLogout} isOpen={isMenuOpen} />
      <div className={classes.message}>
        <MessageList user={user} />
        <MessageInput nickname={user.displayName} />
      </div>
    </div>
  );
};

ChatRoom.propTypes = {
  user: PropTypes.object.isRequired, // user 객체가 필요
};

export default ChatRoom;
