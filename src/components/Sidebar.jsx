import React from "react"; // eslint-disable-line no-unused-vars
import UserProfile from "./UserProfile";
import OnlineUsers from "./OnlineUsers";
import SidebarMenu from "./SidebarMenu";

import PropTypes from "prop-types";
import classes from "./Sidebar.module.css";

const Sidebar = ({ onLogout, isOpen }) => {
  return (
    <div className={`${classes.sidebar} ${isOpen ? classes.active : ""}`}>
      <article>
        <UserProfile />
        <OnlineUsers />
        <SidebarMenu onLogout={onLogout} />
      </article>
    </div>
  );
};

Sidebar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
