import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { database } from "../firebaseConfig";
import { ref, push } from "firebase/database";

import classes from "./MessageInput.module.css";
import PropTypes from "prop-types";

const MessageInput = ({ nickname }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      // Firebase Realtime Database 참조 생성
      const messagesRef = ref(database, "messages");

      // 메시지를 Realtime Database에 저장
      push(messagesRef, {
        text: message,
        nickname,
        timestamp: Date.now(),
      });

      setMessage(""); // 입력 필드 초기화
    }
  };

  return (
    <div className={classes.message_input}>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

MessageInput.propTypes = {
  nickname: PropTypes.string.isRequired,
};

export default MessageInput;
