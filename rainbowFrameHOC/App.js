"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Rainbow from "./components/Rainbow";

import { withRainbowFrame } from './components/withRainbowFrame';

var colors = ["red", "orange", "yellow", "green", "#00BFFF", "blue", "purple"];
var FramedFragment=withRainbowFrame(colors)(Rainbow);

ReactDOM.render(
  <FramedFragment>
    Hello!
  </FramedFragment>,
  document.getElementById("container")
);
