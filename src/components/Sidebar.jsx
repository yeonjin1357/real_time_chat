import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import OnlineUsers from "./OnlineUsers";
import SidebarMenu from "./SidebarMenu";
import classes from "./Sidebar.module.css";

const Sidebar = ({ user, onLogout, isOpen }) => {
  return (
    <div className={`${classes.sidebar} ${isOpen ? classes.active : ""}`}>
      <article>
        <UserProfile user={user} />
        <OnlineUsers myInfo={user} />
        <SidebarMenu onLogout={onLogout} />
      </article>
    </div>
  );
};

Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
