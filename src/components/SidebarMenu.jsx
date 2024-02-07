import React from "react"; // eslint-disable-line no-unused-vars

import PropTypes from "prop-types";
import classes from "./SidebarMenu.module.css";

const SidebarMenu = ({ onLogout }) => {
  return (
    <div className={classes.menu}>
      <div onClick={onLogout}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
      <div>
        <i className="fa-solid fa-gear"></i>
      </div>
      <div>
        <i className="fa-solid fa-bell"></i>
      </div>
    </div>
  );
};

SidebarMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default SidebarMenu;
