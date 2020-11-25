import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.css";

const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      activeClassName={classes.active}
      to={props.link}
      exact={props.exact}
    >
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;

NavigationItem.propTypes = {
  link: PropTypes.string,
  active: PropTypes.bool,
};
