import React from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";
import { EventEmitter } from "events";

import { buttonClick } from "./events";

import "./Card.css";

class Card extends React.PureComponent {
  state = {
    clientsCatalog: this.props.clientsCatalog,
  };

  render() {
    console.log("Card render");

    return (
      <div>
        <span>Фамилия</span>
        <input></input>
        <br />
        <span>Имя</span>
        <input></input>
        <br />
        <span>Отчество</span>
        <input></input>
        <br />
        <span>Баланс</span>
        <input></input>
        <br />
        <button>Добавить</button>
        <button>Отмена</button>
      </div>
    );
  }
}

export default Card;
