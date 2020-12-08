import React from "react";
import PropTypes from "prop-types";

import classes from "./Toolbar.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    {/* <button onClick={props.clicked}>MENU</button> */}
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default Toolbar;

Toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func,
};
