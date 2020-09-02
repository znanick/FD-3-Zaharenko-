import React from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";
import { EventEmitter } from "events";

import { buttonClick } from "./events";

class Card extends React.PureComponent {
  state = {
    clientsCatalog: this.props.clientsCatalog,
  };

  render() {
    console.log('Card render')
    if (this.props.cardMode == 1) {
      //add new client

      var cardCode = (
        <div>
          <span>Фамилия</span>
          <input></input>
          <span>Имя</span>
          <input></input>
          <span>Отчество</span>
          <input></input>
          <span>Баланс</span>
          <input></input>
        </div>
      );
    }
    return { cardCode };
  }
}

export default Card;
