import React from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

import "./Client.css";

class Client extends React.PureComponent {
  state = {
    info: this.props.clientInfo,
  };

  render() {
    console.log('Mobile client ' + this.state.info.key + ' render')
    var statusColor =
      parseFloat(this.state.info.balance) <= 0 ? "red" : "green";
    return (
      <tr>
        <td>{this.state.info.surname}</td>
        <td>{this.state.info.name}</td>
        <td>{this.state.info.familyName}</td>
        <td>{this.state.info.balance}</td>
        <td style={{ backgroundColor: statusColor  }}></td>
        <td><button>Редактировать</button></td>
        <td><button>Удалить</button></td>
      </tr>
    );
  }
}

export default Client;
