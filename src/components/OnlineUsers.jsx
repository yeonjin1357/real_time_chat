import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import classes from "./OnlineUsers.module.css";
import { onDisconnect, set, get } from "firebase/database";
import { auth, db, ref, onValue, serverTimestamp } from "../firebaseConfig"; // 경로는 실제 구조에 맞게 조정하세요

const OnlineUsers = () => {
  const [user, setUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const uid = user.uid;
    const userStatusDatabaseRef = ref(db, `/status/${uid}`);

    const isOfflineForDatabase = {
      state: "offline",
      last_changed: serverTimestamp(),
    };

    const isOnlineForDatabase = {
      state: "online",
      last_changed: serverTimestamp(),
    };

    const connectedRef = ref(db, ".info/connected");
    onValue(connectedRef, (snapshot) => {
      if (snapshot.val() === false) {
        // 유저가 오프라인인 경우
        return;
      }

      // `set` 사용 방식 수정
      onDisconnect(userStatusDatabaseRef)
        .set(isOfflineForDatabase)
        .then(() => {
          set(userStatusDatabaseRef, isOnlineForDatabase); // 여기서 `set` 사용
        });
    });

    // 온라인 사용자 목록 실시간 감시
    const statusRef = ref(db, "/status");
    onValue(statusRef, (snapshot) => {
      const statuses = snapshot.val();
      const userInfos = Object.keys(statuses)
        .filter((uid) => statuses[uid].state === "online")
        .map((uid) => {
          return get(ref(db, `/users/${uid}`)).then((snapshot) => {
            const userInfo = snapshot.val();
            return { uid, ...userInfo };
          });
        });

      Promise.all(userInfos).then((results) => {
        setOnlineUsers(results);
      });
    });
  }, [user]);

  if (!user) return <div className={classes.online_users}>로그인이 필요합니다.</div>;

  return (
    <div className={classes.online_users}>
      <h2>현재 접속자</h2>
      <ul className={classes.online_users_list}>
        {onlineUsers.map((userInfo) => (
          <li key={userInfo.uid}>
            <div className={classes.userinfo}>
              <img className={classes.profile} src={userInfo.profileURL} alt={`${userInfo.nickname}'s profile`} />
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
