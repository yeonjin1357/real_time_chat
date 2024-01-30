import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Firebase 인증 객체 가져오기
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import Sidebar from "./Sidebar";
import classes from "./ChatRoom.module.css";
import PropTypes from "prop-types";

const ChatRoom = ({ user }) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  return (
    <div className={classes.chat_room}>
      <Sidebar user={user} onLogout={handleLogout} />
      <div className={classes.message}>
        <MessageList currentUser={user} />
        <MessageInput nickname={user.displayName} />
      </div>
    </div>
  );
};

ChatRoom.propTypes = {
  user: PropTypes.object.isRequired, // user 객체가 필요
};

export default ChatRoom;
