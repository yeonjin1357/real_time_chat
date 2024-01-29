// src/components/MessageList.jsx
import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { database } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";

import classes from "./MessageList.module.css";
import PropTypes from "prop-types";
import messageProfile from "../assets/message_profile.jpg";

const MessageList = ({ currentUser }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(database, "messages");

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

  return (
    <div className={classes.message_list}>
      {messages.map((message) => (
        <div key={message.id} className={`${classes.message} ${message.nickname === currentUser.displayName ? classes.current_user : ""}`}>
          <div className={classes.profile}>
            <img src={messageProfile} alt="" />
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
  currentUser: PropTypes.object.isRequired,
};

export default MessageList;
