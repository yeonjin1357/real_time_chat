import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import ChatRoom from "./components/ChatRoom";
import classes from "./components/JoinChat.module.css";
import "./App.css";

const App = () => {
  const [nickname, setNickname] = useState("");
  const [enteredChat, setEnteredChat] = useState(false);

  const handleEnterChat = () => {
    if (nickname.trim() !== "") {
      setEnteredChat(true);
    }
  };

  return (
    <div className="app">
      {!enteredChat ? (
        <div className={classes.join_chat}>
          <article>
            <div className={classes.nickname_input}>
              <label>닉네임</label>
              <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="닉네임을 입력해주세요." />
              <span className={classes.focus} data-symbol="user"></span>
            </div>
            <div className={classes.join_chat_btn}>
              <div>
                <div className={classes.join_chat_btn_bg}></div>
                <button onClick={handleEnterChat}> 채팅 참여하기 </button>
              </div>
            </div>
          </article>
        </div>
      ) : (
        <ChatRoom nickname={nickname} />
      )}
    </div>
  );
};

export default App;
