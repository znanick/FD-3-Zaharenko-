import React from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";
import { EventEmitter } from "events";

import { buttonClick } from "./events";

import "./Card.css";

class Card extends React.PureComponent {
  constructor(props) {
    super(props);
    this.surnameRef = React.createRef();
    this.nameRef = React.createRef();
    this.familyNameRef = React.createRef();
    this.balanceRef = React.createRef();
  }

  state = {
    clientsCatalog: this.props.clientsCatalog,
  };

  clickSave = () => {
    var newClientInfo = {
      surname: this.surnameRef.current.value,
      name: this.nameRef.current.value,
      familyName: this.familyNameRef.current.value,
      balance: this.balanceRef.current.value,
      key: this.props.clientId,
    };
    buttonClick.emit("EButtonSave", newClientInfo);
  };

  render() {
    console.log("Card render");

    return (
      <div>
        <span>Фамилия</span>
        <input ref={this.surnameRef}></input>
        <br />
        <span>Имя</span>
        <input ref={this.nameRef}></input>
        <br />
        <span>Отчество</span>
        <input ref={this.familyNameRef}></input>
        <br />
        <span>Баланс</span>
        <input type="number" ref={this.balanceRef}></input>
        <br />
        <button onClick={this.clickSave}>Сохранить</button>
        <button onClick = {() => {buttonClick.emit("EButtonCencel")}}>Отмена</button>
      </div>
    );
  }
}

export default Card;
