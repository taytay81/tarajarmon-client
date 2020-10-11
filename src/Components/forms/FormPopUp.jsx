import React, { Component } from "react";

export default class FormPopUp extends Component {
  render() {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
          {props.content}
          <input type="text" />
        </div>
      </div>
    );
  }
}
