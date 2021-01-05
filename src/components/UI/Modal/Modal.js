import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Modal.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  //wrapping element controls the rednering of the wrapped element, so in Modal.js we control OrderSummary.js because it doesn't need to rerender every time the state changes. With shouldComponentUpdate we control rendering, so it renders only when OrderNow is clicked:
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func,
};
