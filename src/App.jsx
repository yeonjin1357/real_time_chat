import React, { useEffect } from "react"; // eslint-disable-line no-unused-vars
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebaseConfig"; // Firebase 설정을 가져옵니다.
import { useSelector, useDispatch } from "react-redux";
import { setUser, setLoading } from "./features/user/userSlice";
import { ref, get } from "firebase/database";

import ChatRoom from "./components/ChatRoom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import "./App.css";

const App = () => {
  const { currentUser, isLoading } = useSelector((state) => state.user);
  const { isSigningUp } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Firebase Realtime Database에서 사용자 프로필 정보를 불러옵니다.
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const userData = snapshot.val();
          // Redux 스토어에 사용자 정보를 저장합니다.
          dispatch(
            setUser({
              displayName: userData.displayName || user.displayName,
              email: user.email,
              uid: user.uid,
              profileURL: userData.profileURL || "img/default_profile.png", // 기본 이미지 경로
            })
          );
        }
      } else {
        // 사용자가 로그아웃한 경우, 사용자 상태를 null로 설정합니다.
        dispatch(setUser(null));
      }
      dispatch(setLoading(false)); // 로딩 상태 업데이트
    });
    return () => unsubscribe(); // 클린업 함수에서 구독 취소
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className="app">{currentUser ? <ChatRoom /> : isSigningUp ? <SignUpForm /> : <LoginForm />}</div>;
};

export default App;
