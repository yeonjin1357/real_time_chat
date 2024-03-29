import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { useDispatch } from "react-redux";
import { toggleSignUp } from "../features/ui/uiSlice";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { ref, set, get } from "firebase/database";

import classes from "./SignUpForm.module.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const dispatch = useDispatch();

  // 닉네임 중복 검사
  const checkNicknameUnique = async (nickname) => {
    const usersRef = ref(db, "users");
    const snapshot = await get(usersRef);
    let isUnique = true;

    snapshot.forEach((userSnapshot) => {
      const userData = userSnapshot.val();
      if (userData.nickname === nickname) {
        isUnique = false;
      }
    });

    return isUnique;
  };

  // 회원가입 처리
  const handleSignUp = async (e) => {
    e.preventDefault();

    // 닉네임 중복 검사
    const isUnique = await checkNicknameUnique(nickname);
    if (!isUnique) {
      alert("이미 사용 중인 닉네임입니다.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Firebase Authentication에 사용자 정보 업데이트
      await updateProfile(user, {
        displayName: nickname, // 닉네임
        profileURL: "img/default_profile.png", // 프로필 이미지
        status: false, // 사용자 상태 (온,오프라인)
      });

      // Firebase Realtime Database에 사용자 정보 저장
      await set(ref(db, "users/" + user.uid), {
        email: email,
        nickname: nickname,
        profileURL: "img/default_profile.png", // 프로필 이미지
        status: false, // 사용자 상태 (온,오프라인)
      });

      // 회원가입 성공 후 UI 상태 업데이트
      alert("회원가입이 완료되었습니다.");
      await signOut(auth);
      dispatch(toggleSignUp());
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("이미 사용 중인 이메일 주소입니다.");
      } else if (error.code === "auth/invalid-email") {
        alert("잘못된 이메일 형식입니다. 올바른 이메일 주소를 입력해주세요.");
      } else if (error.code === "auth/weak-password") {
        alert("비밀번호가 너무 약합니다. 보다 강력한 비밀번호를 사용해주세요.");
      } else if (error.code === "auth/network-request-failed") {
        alert("네트워크 문제가 발생했습니다. 인터넷 연결을 확인해주세요.");
      } else {
        alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
        console.error("SignUp failed", error);
        // 다른 에러 메시지 처리
      }
    }
  };

  return (
    <form onSubmit={handleSignUp} className={classes.signup_form}>
      <article>
        <div className={`${classes.email_input} ${classes.input_wrap}`}>
          <label>이메일</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력해주세요" />
          <span className={classes.focus} data-symbol="email"></span>
        </div>
        <div className={`${classes.password_input} ${classes.input_wrap}`}>
          <label>비밀번호</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="패스워드를 입력해주세요" />
          <span className={classes.focus} data-symbol="password"></span>
        </div>
        <div className={`${classes.nickname_input} ${classes.input_wrap}`}>
          <label>닉네임</label>
          <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="닉네임을 입력해주세요" />
          <span className={classes.focus} data-symbol="user"></span>
        </div>
        <div className={classes.login_link}>
          <button type="button" onClick={() => dispatch(toggleSignUp())}>
            로그인 화면으로 돌아가기
          </button>
        </div>
        <div className={classes.signup_btn}>
          <div>
            <div className={classes.signup_btn_bg}></div>
            <button type="submit"> 계정 생성 </button>
          </div>
        </div>
      </article>
    </form>
  );
};

export default SignUpForm;
