import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

import ChatRoom from "./components/ChatRoom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false); // 로딩 상태 업데이트
    });
    return () => unsubscribe();
  }, []);

  const handleSignUpClick = () => setIsSigningUp(true);
  const handleSignUpSuccess = () => setIsSigningUp(false);

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 컴포넌트 또는 스피너
  }

  return <div className="app">{currentUser ? <ChatRoom user={currentUser} /> : isSigningUp ? <SignUpForm onSignUpSuccess={handleSignUpSuccess} /> : <LoginForm onSignUpClick={handleSignUpClick} />}</div>;
};

export default App;
