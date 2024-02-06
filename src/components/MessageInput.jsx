import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { useSelector } from "react-redux";
import { db } from "../firebaseConfig";
import { ref, push } from "firebase/database";

import classes from "./MessageInput.module.css";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleSendMessage = () => {
    if (message.trim() !== "" && currentUser) {
      const messagesRef = ref(db, "messages");

      push(messagesRef, {
        text: message,
        uid: currentUser.uid, // 사용자의 uid를 메시지 객체에 추가
        nickname: currentUser.displayName, // Redux 스토어에서 가져온 닉네임 사용
        timestamp: Date.now(),
        // 프로필 이미지 URL을 여기에 포함시키지 않고, 대신 MessageList에서 uid를 기반으로 조회
      });

      setMessage(""); // 입력 필드 초기화
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // Shift 키가 눌리지 않은 상태에서 Enter를 누를 때 메시지를 보냅니다.
      handleSendMessage();
      e.preventDefault(); // Enter 키를 눌렀을 때의 기본 동작(새 줄 추가)을 방지합니다.
    }
  };

  return (
    <div className={classes.message_input}>
      <input type="text" value={message} onKeyDown={handleKeyPress} onChange={(e) => setMessage(e.target.value)} placeholder="메시지를 입력해주세요" />
      <button onClick={handleSendMessage}>발송</button>
    </div>
  );
};

export default MessageInput;
