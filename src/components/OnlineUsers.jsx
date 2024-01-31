import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { onDisconnect, set, get } from "firebase/database";
import { db, ref, onValue, serverTimestamp } from "../firebaseConfig"; // 경로는 실제 구조에 맞게 조정하세요

import classes from "./OnlineUsers.module.css";
import PropTypes from "prop-types";

const OnlineUsers = ({ myInfo }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (!myInfo) return;

    const uid = myInfo.uid;
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
        return;
      }

      onDisconnect(userStatusDatabaseRef)
        .set(isOfflineForDatabase)
        .then(() => {
          set(userStatusDatabaseRef, isOnlineForDatabase);
        });
    });

    // 온라인 사용자 목록 실시간 감시
    const statusRef = ref(db, "/status");
    onValue(statusRef, async (snapshot) => {
      const statuses = snapshot.val();
      let userInfos = await Promise.all(
        Object.keys(statuses)
          .filter((uid) => statuses[uid].state === "online")
          .map(async (uid) => {
            const userSnapshot = await get(ref(db, `/users/${uid}`));
            const userInfo = userSnapshot.val();
            return { uid, ...userInfo };
          })
      );

      // 현재 로그인한 사용자(myInfo)를 목록에서 찾아 최상단으로 배치
      userInfos = userInfos.sort((a, b) => {
        if (a.uid === myInfo?.uid) return -1;
        if (b.uid === myInfo?.uid) return 1;
        return 0;
      });

      setOnlineUsers(userInfos);
    });
  }, [myInfo]);

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

OnlineUsers.propTypes = {
  myInfo: PropTypes.object.isRequired,
};

export default OnlineUsers;
