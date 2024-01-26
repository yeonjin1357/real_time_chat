// src/components/MessageList.jsx
import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { database } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(database, "messages");

    // onValue 호출 시 반환되는 unsubscribe 함수를 저장
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

    // 컴포넌트가 언마운트될 때 구독 해제
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message.id} className="message">
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
