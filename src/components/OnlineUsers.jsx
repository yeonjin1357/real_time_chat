import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { useSelector } from "react-redux";
import { onDisconnect, update, ref, onValue, serverTimestamp } from "firebase/database";
import { db } from "../firebaseConfig";
import classes from "./OnlineUsers.module.css";

const OnlineUsers = () => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) return;

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

    onValue(connectedRef, (snapshot) => {
      if (snapshot.val() === false) {
        return;
      }
      onDisconnect(userStatusDatabaseRef)
        .update(isOfflineForDatabase)
        .then(() => {
          update(userStatusDatabaseRef, isOnlineForDatabase);
        });
    });

    // 온라인 사용자 목록 실시간 감시
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

      setOnlineUsers(sortedUserInfos);
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
