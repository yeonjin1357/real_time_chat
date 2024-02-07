import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { useSelector } from "react-redux";
import { db } from "../firebaseConfig";
import { ref, push } from "firebase/database";

import classes from "./MessageInput.module.css";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser); // 현재 로그인한 사용자 정보 가져오기

  // 메시지 전송 처리
  const handleSendMessage = () => {
    // 메시지 내용이 비어있지 않고, 사용자 정보가 있을 경우에만 처리
    if (message.trim() !== "" && currentUser) {
      const messagesRef = ref(db, "messages");

      // 메시지 정보를 Realtime Database에 저장
      push(messagesRef, {
        text: message, // 메시지 내용
        uid: currentUser.uid, // 메시지 작성자의 UID
        nickname: currentUser.displayName, // 사용자 닉네임
        timestamp: Date.now(), // 메시지 전송 시간
        // 프로필 이미지 URL을 여기에 포함시키지 않고, 대신 MessageList에서 uid를 기반으로 조회
      });

      setMessage(""); // 메시지 전송 후 입력 필드 초기화
    }
  };

  // 키보드 입력 처리 (Enter 키로 메시지 전송)
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSendMessage();
      e.preventDefault(); // Enter 키 기본 동작(개행) 방지
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
