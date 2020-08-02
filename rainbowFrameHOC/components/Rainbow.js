import React from "react";
import PropTypes from "prop-types";

import "./Rainbow.css";
import { withRainbowFrame } from "./withRainbowFrame";

class Rainbow extends React.Component {
  click = (num) => {
    console.log(num);
    this.props.cbPressed(num);
  };

  render() {
    return (
      <div>
        <button key="1" onClick={() => this.click("1")}>
          {this.props.caption1}{" "}
        </button>
        {this.props.children}
        <button onClick={() => this.click("2")}>{this.props.caption2} </button>
      </div>
    );
  }
}

export default Rainbow;
