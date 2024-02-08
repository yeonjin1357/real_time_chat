import React, { useEffect } from "react"; // eslint-disable-line no-unused-vars
import { useSelector, useDispatch } from "react-redux";
import { setUser, setLoading } from "./features/user/userSlice";
import { auth, db } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get } from "firebase/database";

import ChatRoom from "./components/ChatRoom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Loading from "./components/Loading";
import "./App.css";

const App = () => {
  const { currentUser, isLoading } = useSelector((state) => state.user);
  const { isSigningUp } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // 로그인한 사용자의 정보를 Firebase Realtime Database에서 조회
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const userData = snapshot.val();
          // 조회된 사용자 정보로 Redux 스토어 업데이트
          dispatch(
            setUser({
              displayName: userData.displayName || user.displayName,
              email: user.email,
              uid: user.uid,
              profileURL: userData.profileURL || "img/default_profile.png",
            })
          );
        }
      } else {
        // 사용자가 로그아웃한 경우, 사용자 상태를 null로 설정
        dispatch(setUser(null));
      }
      dispatch(setLoading(false)); // 로딩 상태 업데이트
    });
    return () => unsubscribe(); // 클린업 함수에서 구독 취소
  }, [dispatch]);

  // 로딩 상태일 때 Loading 컴포넌트 렌더링
  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(currentUser);

  // 사용자 로그인 상태에 따라 적절한 컴포넌트 렌더링
  return <div className="app">{currentUser ? <ChatRoom /> : isSigningUp ? <SignUpForm /> : <LoginForm />}</div>;
};

export default App;
