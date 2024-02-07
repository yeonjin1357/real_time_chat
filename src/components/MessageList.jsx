import React, { useEffect, useState, useRef } from "react"; // eslint-disable-line no-unused-vars
import { useSelector } from "react-redux";
import { db } from "../firebaseConfig";
import { ref, onValue, get } from "firebase/database";

import classes from "./MessageList.module.css";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [usersProfiles, setUsersProfiles] = useState({}); // 각 사용자의 프로필 이미지 URL 저장
  const messageListRef = useRef(null); // 메시지 목록을 스크롤하기 위한 ref
  const currentUser = useSelector((state) => state.user.currentUser); // 현재 로그인한 사용자 정보

  useEffect(() => {
    const fetchUserProfile = async (uid) => {
      // 사용자 프로필 이미지 URL을 조회
      const userRef = ref(db, `users/${uid}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        // 조회된 프로필 이미지 URL을 상태에 저장
        setUsersProfiles((prev) => ({ ...prev, [uid]: userData.profileURL || "img/default_profile.png" }));
      }
    };

    const messagesRef = ref(db, "messages");

    // 메시지 목록 실시간 감시
    onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val();
      const loadedMessages = [];
      for (const key in messagesData) {
        loadedMessages.push({
          id: key,
          ...messagesData[key],
        });
        // 메시지 작성자의 프로필 이미지 조회
        fetchUserProfile(messagesData[key].uid);
      }
      setMessages(loadedMessages);
    });
  }, []);

  useEffect(() => {
    // 메시지 목록이 업데이트될 때 스크롤을 최신 메시지 위치로 이동
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
