import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import classes from "./ChatRoom.module.css";
import PropTypes from "prop-types";

const ChatRoom = ({ nickname }) => {
  return (
    <div className={classes.chat_room}>
      <MessageList />
      <MessageInput nickname={nickname} />
    </div>
  );
};

ChatRoom.propTypes = {
  nickname: PropTypes.string.isRequired,
};

export default ChatRoom;
