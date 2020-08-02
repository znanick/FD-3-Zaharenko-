"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Rainbow from "./components/Rainbow";

import { withRainbowFrame } from "./components/withRainbowFrame";

ReactDOM.render(
  <Rainbow caption1="однажды" caption2="пору" cbPressed={(num) => alert(num)}>
    в студёную зимнюю
  </Rainbow>,
  document.getElementById("container1")
);

var colors = ["red", "orange", "yellow", "green", "#00BFFF", "blue", "purple"];
var FramedFragment = withRainbowFrame(colors)(Rainbow);

ReactDOM.render(
  <FramedFragment caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>вышел, был сильный</FramedFragment>,
  document.getElementById("container2")
);
