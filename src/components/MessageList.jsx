import React, { useEffect, useState, useRef } from "react"; // eslint-disable-line no-unused-vars
import { useSelector } from "react-redux";
import { db } from "../firebaseConfig";
import { ref, onValue, get } from "firebase/database";

import classes from "./MessageList.module.css";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [usersProfiles, setUsersProfiles] = useState({});
  const messageListRef = useRef(null);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    // 사용자 프로필 이미지를 불러오는 로직
    const fetchUserProfile = async (uid) => {
      const userRef = ref(db, `users/${uid}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setUsersProfiles((prev) => ({ ...prev, [uid]: userData.profileURL || "img/default_profile.png" }));
      }
    };

    const messagesRef = ref(db, "messages");

    onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val();
      const loadedMessages = [];
      for (const key in messagesData) {
        loadedMessages.push({
          id: key,
          ...messagesData[key],
        });
        // 각 메시지의 사용자 UID에 대한 프로필 이미지 조회
        fetchUserProfile(messagesData[key].uid);
      }
      setMessages(loadedMessages);
    });
  }, []);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={messageListRef} className={classes.message_list}>
      {messages.map((message) => (
        <div key={message.id} className={`${classes.message} ${message.uid === currentUser.uid ? classes.current_user : ""}`}>
          <div className={classes.profile}>
            <img src={usersProfiles[message.uid] || "img/default_profile.png"} alt="Profile" />
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

export default MessageList;
