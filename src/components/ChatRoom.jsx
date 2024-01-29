import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Firebase 인증 객체 가져오기
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import classes from "./ChatRoom.module.css";
import PropTypes from "prop-types";

const ChatRoom = ({ user }) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // 로그아웃 성공 처리
        console.log("Logged out successfully!");
      })
      .catch((error) => {
        // 로그아웃 오류 처리
        console.error("Logout failed", error);
      });
  };

  const nickname = user.displayName; // Firebase 사용자 프로필에서 닉네임 사용

  return (
    <div className={classes.chat_room}>
      <div className={classes.message}>
        <MessageList currentUser={user} />
        <MessageInput nickname={nickname} />
      </div>
      <button onClick={handleLogout} className={classes.logoutButton}>
        로그아웃
      </button>
    </div>
  );
};

ChatRoom.propTypes = {
  user: PropTypes.object.isRequired, // user 객체가 필요
};

export default ChatRoom;
