"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Ishop from "./components/Ishop";

var pageText = "Каталог телефонов";
var productList = [
  {
    name: "Nokia",
    code: 1,
    price: "222$",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Nokia_3310.png",
    amount: "1290 шт",
  },
  {
    name: "Motorola",
    code: 2,
    price: "120$",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Motorola_RAZR_V3i_01.JPG/1024px-Motorola_RAZR_V3i_01.JPG",
    amount: "100 шт",
  },
  {
    name: "Siemens",
    code: 3,
    price: "168$",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Siemens_C65.jpg/209px-Siemens_C65.jpg",
    amount: "22 шт",
  },
];

ReactDOM.render(
  <Ishop
    text = {pageText}
    catalog= {productList} 
  />
  , document.getElementById("container")
);
