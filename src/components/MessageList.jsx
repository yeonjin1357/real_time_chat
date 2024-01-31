import React, { useEffect, useState, useRef } from "react"; // eslint-disable-line no-unused-vars
import { db } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";

import classes from "./MessageList.module.css";
import PropTypes from "prop-types";

const MessageList = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const messageListRef = useRef(null); // 메시지 리스트 DOM 요소에 대한 참조 생성

  useEffect(() => {
    const messagesRef = ref(db, "messages");

    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val();
      const loadedMessages = [];
      for (const key in messagesData) {
        loadedMessages.push({
          id: key,
          ...messagesData[key],
        });
      }
      setMessages(loadedMessages);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // 메시지 목록이 변경될 때마다 스크롤 위치를 조정
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]); // 메시지 목록이 변경될 때마다 이 효과를 실행

  return (
    <div ref={messageListRef} className={classes.message_list}>
      {" "}
      {/* 참조 연결 */}
      {/* 메시지 목록 렌더링 */}
      {messages.map((message) => (
        <div key={message.id} className={`${classes.message} ${message.nickname === user.displayName ? classes.current_user : ""}`}>
          <div className={classes.profile}>
            <img src={user.photoURL}></img>
          </div>
          <div className={classes.content}>
            <p className={classes.nickname}>{message.nickname}</p>
            <p className={classes.text}>{message.text}</p>
            <p className={classes.time}>{new Date(message.timestamp).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

MessageList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default MessageList;
