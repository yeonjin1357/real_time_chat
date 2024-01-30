import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import classes from "./SidebarMenu.module.css";

const SidebarMenu = ({ onLogout }) => {
  return (
    <div className={classes.menu}>
      <button>설정</button>
      <button onClick={onLogout}>로그아웃</button>
      <button>알림</button>
    </div>
  );
};

SidebarMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default SidebarMenu;
