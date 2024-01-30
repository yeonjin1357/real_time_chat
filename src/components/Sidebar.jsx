import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import OnlineUsers from "./OnlineUsers";
import SidebarMenu from "./SidebarMenu";
import classes from "./Sidebar.module.css";

const Sidebar = ({ user, onLogout, onlineUsers }) => {
  return (
    <div className={classes.sidebar}>
      <article>
        <UserProfile user={user} />
        <OnlineUsers users={onlineUsers} />
        <SidebarMenu onLogout={onLogout} />
      </article>
    </div>
  );
};

Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  onlineUsers: PropTypes.array.isRequired,
  onImageChange: PropTypes.func.isRequired,
};

export default Sidebar;
