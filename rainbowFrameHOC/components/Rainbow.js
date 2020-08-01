import React from "react";
import PropTypes from "prop-types";

import "./Rainbow.css";
import { withRainbowFrame } from "./withRainbowFrame";

class Rainbow extends React.Component {
  render() {
    return <div> {this.props.children}</div>;
  }
}

export default Rainbow;
