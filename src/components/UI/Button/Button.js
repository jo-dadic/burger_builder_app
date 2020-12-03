import React from "react";
import PropTypes from "prop-types";

import classes from "./Button.css";

const Button = (props) => (
  //classname has to be a string (.join(' '))
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;

Button.propTypes = {
  btnType: PropTypes.string,
  clicked: PropTypes.func,
};
