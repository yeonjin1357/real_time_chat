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
        nickname: nickname, // 닉네임 값이 올바르게 설정되어 있는지 확인
        timestamp: Date.now(),
      });
      console.log("Nickname:", nickname, "Message:", message);

      setMessage(""); // 입력 필드 초기화
    }
  };

  return (
    <div className={classes.message_input}>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="메시지를 입력해주세요" />
      <button onClick={handleSendMessage}>발송</button>
    </div>
  );
};

MessageInput.propTypes = {
  nickname: PropTypes.string.isRequired,
};

export default MessageInput;
