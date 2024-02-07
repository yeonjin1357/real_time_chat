import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { useDispatch } from "react-redux";
import { toggleSignUp } from "../features/ui/uiSlice";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserSessionPersistence); // 세션 지속성 설정
      await signInWithEmailAndPassword(auth, email, password); // 이메일과 비밀번호로 로그인 시도
    } catch (error) {
      alert("로그인 정보가 정확하지 않습니다.");
      console.error("Login failed", error);
    }
  };

  return (
    <form onSubmit={handleLogin} className={classes.login_form}>
      <article>
        <div className={`${classes.email_input} ${classes.input_wrap}`}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력해주세요" />
          <span className={classes.focus} data-symbol="email"></span>
        </div>
        <div className={`${classes.password_input} ${classes.input_wrap}`}>
          <label>비밀번호</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="패스워드를 입력해주세요" />
          <span className={classes.focus} data-symbol="password"></span>
        </div>
        <div className={classes.signup_link}>
          <button type="button" onClick={() => dispatch(toggleSignUp())}>
            회원가입 하기
          </button>
        </div>
        <div className={classes.login_btn}>
          <div>
            <div className={classes.login_btn_bg}></div>
            <button type="submit">채팅 참여하기</button>
          </div>
        </div>
      </article>
    </form>
  );
};

export default LoginForm;
