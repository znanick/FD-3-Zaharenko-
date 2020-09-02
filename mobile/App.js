"use strict";

import React from "react";
import ReactDOM from "react-dom";

import ClientsPage from "./components/ClientsPage";

var clientList = require("./clientList.json");
var companyList = ["A1", "MTS"];

ReactDOM.render(
  <ClientsPage companyList={companyList} catalog={clientList} />,
  document.getElementById("container")
);
