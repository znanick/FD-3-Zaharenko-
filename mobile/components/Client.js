import React from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

import "./Client.css";
import { buttonClick } from "./events";

class Client extends React.PureComponent {
  state = {
    
  };



  render() {
    console.log("Mobile client " + this.props.clientInfo.key + " render");
    
    var statusColor =
      parseFloat(this.props.clientInfo.balance) <= 0 ? "#f44336" : "#4CAF50";
    return (
      <tr>
        <td>{this.props.clientInfo.surname}</td>
        <td>{this.props.clientInfo.name}</td>
        <td>{this.props.clientInfo.familyName}</td>
        <td>{this.props.clientInfo.balance}</td>
        <td style={{ backgroundColor: statusColor }}></td>
        <td>
          <button
            onClick={() => {
              buttonClick.emit("EEditClient", this.props.clientInfo.key);
            }}
          >
            Редактировать
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              buttonClick.emit("ERemoveClient", this.props.clientInfo.key);
            }}
          >
            Удалить
          </button>
        </td>
      </tr>
    );
  }
}

export default Client;
