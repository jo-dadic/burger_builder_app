import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary"; //for wrapping the root element
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.css";

// we are using Layout comp as a wrappir around the core comp that we want to render to the screen
class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
