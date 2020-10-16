import React from "react";
import PropTypes from "prop-types";

import classes from "./Backdrop.css";

const Backdrop = (props) => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;

Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};
