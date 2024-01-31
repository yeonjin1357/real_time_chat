// HamburgerMenu.jsx
import React from "react"; // eslint-disable-line no-unused-vars

import classes from "./HamburgerMenu.module.css";
import PropTypes from "prop-types";

const HamburgerMenu = ({ onToggleMenu, isOpen }) => {
  return (
    <div className={`${classes.mobile_menu} ${isOpen ? classes.active : ""}`}>
      <div className={classes.hamburger_wrap}>
        <input type="checkbox" id="checkbox" autoComplete="off" className={classes.checkbox} />
        <label htmlFor="checkbox">
          <div className={classes.hamburger} onClick={onToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
      </div>
    </div>
  );
};

HamburgerMenu.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default HamburgerMenu;
