import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import classes from "./UserProfile.module.css";

const UserProfile = ({ user }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile_img}>
        <img src={user.photoURL} alt={user.displayName} />
      </div>
      <p className={classes.nickname}>{user.displayName}</p>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserProfile;
