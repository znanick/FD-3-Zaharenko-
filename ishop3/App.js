"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Ishop from "./components/Ishop";

var pageText = "Каталог телефонов";
var productList = require("./productList.json");

ReactDOM.render(
  <Ishop text={pageText} catalog={productList} />,
  document.getElementById("container")
);
