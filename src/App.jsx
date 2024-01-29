import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Firebase 인증 객체 가져오기

import ChatRoom from "./components/ChatRoom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSigningUp(true);
  };

  const handleSignUpSuccess = () => {
    setIsSigningUp(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 사용자가 로그인한 경우
        setCurrentUser(user);
      } else {
        // 사용자가 로그아웃한 경우
        setCurrentUser(null);
      }
    });

    return () => unsubscribe(); // 구독 해제
  }, []);

  return <div className="app">{currentUser ? <ChatRoom user={currentUser} /> : isSigningUp ? <SignUpForm onSignUpSuccess={handleSignUpSuccess} /> : <LoginForm onSignUpClick={handleSignUpClick} />}</div>;
};

export default App;
