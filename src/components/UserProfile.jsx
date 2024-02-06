import React from "react"; // eslint-disable-line no-unused-vars
import { useSelector, useDispatch } from "react-redux";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as databaseRef, update } from "firebase/database";
import { db, storage } from "../firebaseConfig"; // Firebase 설정을 가져옵니다.
import { setUser } from "../features/user/userSlice"; // Redux 액션
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !currentUser) return;

    try {
      // Firebase Storage에 이미지 업로드
      const fileRef = storageRef(storage, `profileImages/${currentUser.uid}`);
      await uploadBytes(fileRef, file);
      const profileURL = await getDownloadURL(fileRef);

      // 사용자 프로필 업데이트
      await update(databaseRef(db, `users/${currentUser.uid}`), { profileURL });

      // Redux 스토어 업데이트
      dispatch(setUser({ ...currentUser, profileURL }));
    } catch (error) {
      console.error("Failed to upload profile image", error);
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
