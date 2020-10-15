import React from "react";

import Aux from "../../hoc/Auxiliary"; //for wrapping the root element
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import classes from "./Layout.css";

// we are using Layout comp as a wrappir around the core comp that we want to render to the screen
const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
