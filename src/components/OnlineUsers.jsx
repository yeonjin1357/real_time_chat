import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { useSelector } from "react-redux";
import { db } from "../firebaseConfig";
import { onDisconnect, update, ref, onValue, serverTimestamp } from "firebase/database";

import classes from "./OnlineUsers.module.css";

const OnlineUsers = () => {
  const [onlineUsers, setOnlineUsers] = useState([]); // 온라인 사용자 목록 상태 관리
  const currentUser = useSelector((state) => state.user.currentUser); // 현재 로그인한 사용자 정보

  useEffect(() => {
    if (!currentUser) return; // 사용자가 로그인하지 않은 경우 함수 실행 중지

    // 사용자 상태를 실시간으로 감시하기 위한 데이터베이스 참조
    const userStatusDatabaseRef = ref(db, `/users/${currentUser.uid}`);
    const connectedRef = ref(db, ".info/connected");
    const isOfflineForDatabase = {
      status: false,
      last_changed: serverTimestamp(),
    };
    const isOnlineForDatabase = {
      status: true,
      last_changed: serverTimestamp(),
    };

    // 연결 상태 감시
    onValue(connectedRef, (snapshot) => {
      if (snapshot.val() === false) {
        return; // 연결이 끊긴 경우 함수 실행 중지
      }
      // 오프라인으로 전환될 경우 데이터베이스 업데이트
      onDisconnect(userStatusDatabaseRef)
        // 다시 온라인 상태일 때 데이터베이스 업데이트
        .update(isOfflineForDatabase)
        .then(() => {
          update(userStatusDatabaseRef, isOnlineForDatabase);
        });
    });

    // 전체 사용자 중 온라인 상태인 사용자 목록 감시
    const statusRef = ref(db, "/users");
    onValue(statusRef, (snapshot) => {
      const statuses = snapshot.val();
      const userInfos = Object.keys(statuses)
        .filter((key) => statuses[key].status === true)
        .map((key) => ({
          uid: key,
          ...statuses[key],
        }));

      // 현재 로그인한 사용자를 목록에서 찾아 최상단으로 배치
      const sortedUserInfos = userInfos.sort((a, b) => {
        return a.uid === currentUser.uid ? -1 : b.uid === currentUser.uid ? 1 : 0;
      });

      setOnlineUsers(sortedUserInfos); // 온라인 사용자 목록 상태 업데이트
    });
  }, [currentUser]);

  return (
    <div className={classes.online_users}>
      <h2>현재 접속자 ({onlineUsers.length}명)</h2>
      <ul className={classes.online_users_list}>
        {onlineUsers.map((userInfo) => (
          <li key={userInfo.uid}>
            <div className={classes.userinfo}>
              <img className={classes.profile} src={userInfo.profileURL || "img/default_profile.png"} alt={`${userInfo.nickname}'s profile`} />
              <p className={classes.nickname}>{userInfo.nickname}</p>
            </div>
            <span className={classes.dot}></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineUsers;
