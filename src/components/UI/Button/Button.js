import React from "react";

import classes from "./Button.css";

const Button = (props) => (
  //classname has to be a string (.join(' '))
  <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
