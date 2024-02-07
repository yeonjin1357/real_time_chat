import React from "react"; // eslint-disable-line no-unused-vars
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { db, storage } from "../firebaseConfig";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as databaseRef, update } from "firebase/database";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const currentUser = useSelector((state) => state.user.currentUser); // 현재 로그인한 사용자 정보 조회
  const dispatch = useDispatch();

  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // 사용자가 선택한 파일
    if (!file || !currentUser) return; // 파일이 없거나 사용자 정보가 없으면 처리 중단

    try {
      // 선택된 이미지를 Firebase Storage에 업로드
      const fileRef = storageRef(storage, `profileImages/${currentUser.uid}`);
      await uploadBytes(fileRef, file); // 파일 업로드
      const profileURL = await getDownloadURL(fileRef); // 업로드된 파일의 URL 가져오기

      // Firebase Realtime Database에 사용자 프로필 URL 업데이트
      await update(databaseRef(db, `users/${currentUser.uid}`), { profileURL });

      // 업데이트된 프로필 URL을 포함하여 Redux 스토어의 사용자 정보 업데이트
      dispatch(setUser({ ...currentUser, profileURL }));
    } catch (error) {
      console.error("Failed to upload profile image", error); // 이미지 업로드 실패 시 오류 로깅
    }
  };

  return (
    <div className={classes.profile}>
      <div className={classes.profile_img}>
        <img src={currentUser.profileURL || "img/default_profile.png"} alt="Profile" />
        <div className={classes.profile_change}>
          <label htmlFor="profileImageInput">
            <img src="img/camera_icon.png" alt="Change profile" />
          </label>
          <input id="profileImageInput" type="file" hidden onChange={handleImageChange} />
        </div>
      </div>
      {currentUser && <p className={classes.nickname}>{currentUser.displayName}</p>}
    </div>
  );
};

export default UserProfile;
