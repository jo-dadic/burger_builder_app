import React, { Component } from "react";

import Aux from "../Auxiliary/Auxiliary"; //for wrapping the root element
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.css";

// we are using Layout comp as a wrappir around the core comp that we want to render to the screen
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  // sideDrawerShowedHandler = () => {
  //   this.setState({ showSideDrawer: true });
  // };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        {/* <Toolbar clicked={this.sideDrawerShowedHandler} /> */}
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
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
