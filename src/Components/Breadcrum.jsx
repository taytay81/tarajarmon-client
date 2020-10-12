import React, { Component } from "react";
import "./../Styles/BreadCrum.css";

export default class breadcrum extends Component {
  render() {
    return (
      <div className="Breadcrum-container">
        {this.props.links.map((elmt, i) => (
          <a key={i} href={elmt.link} className="Breadcrum-link">
            {elmt.name}
            <span className="Breadcrum-separator"> {elmt.separator} </span>
          </a>
        ))}
      </div>
    );
  }
}
